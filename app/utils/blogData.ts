import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

export class BlogArticleNotFoundError extends Error {}

export type BlogArticleMetadata = {
    slug: string;
    title: string;
    description: string;
    publishedAt: string;
    updatedAt?: string;
};

export type BlogArticleSummary = BlogArticleMetadata & {
    publishedAt: string;
    updatedAt: string;
};

export type BlogArticle = BlogArticleSummary & {
    markdown: string;
    html: string;
};

export type BlogDataDependencies = {
    readMetadata: () => Promise<BlogArticleMetadata[]>;
    readMarkdownFileNames: () => Promise<string[]>;
    readMarkdownByFileName: (fileName: string) => Promise<string>;
};

const toMarkdownFileName = (slug: string): string => `${slug}.md`;

const articleDates = (metadata: BlogArticleMetadata) => ({
    publishedAt: metadata.publishedAt,
    updatedAt: metadata.updatedAt ?? metadata.publishedAt,
});

const assertMetadataMatchesMarkdownFile = (
    slug: string,
    markdownFileNames: string[]
): void => {
    const markdownFileName = toMarkdownFileName(slug);

    if (!markdownFileNames.includes(markdownFileName)) {
        throw new Error(
            `Metadata slug "${slug}" does not map to an existing markdown file.`
        );
    }
};

const parseMarkdown = (markdown: string): string => {
    const parsed = marked.parse(markdown);

    if (typeof parsed === 'string') {
        return sanitizeHtml(parsed, {
            allowedTags: [...sanitizeHtml.defaults.allowedTags, 'img'],
        });
    }

    throw new Error('Expected markdown parser to return a string.');
};

export const getBlogSummaries = async (
    dependencies: BlogDataDependencies
): Promise<BlogArticleSummary[]> => {
    const metadata = await dependencies.readMetadata();
    const markdownFileNames = await dependencies.readMarkdownFileNames();

    const summaries = metadata.map((articleMetadata) => {
        assertMetadataMatchesMarkdownFile(
            articleMetadata.slug,
            markdownFileNames
        );

        return {
            ...articleMetadata,
            ...articleDates(articleMetadata),
        };
    });

    return summaries
        .slice()
        .sort(
            (
                firstArticle: BlogArticleSummary,
                secondArticle: BlogArticleSummary
            ) =>
                new Date(secondArticle.publishedAt).getTime() -
                new Date(firstArticle.publishedAt).getTime()
        );
};

export const getBlogArticleBySlug = async (
    slug: string,
    dependencies: BlogDataDependencies
): Promise<BlogArticle> => {
    const metadata = await dependencies.readMetadata();
    const articleMetadata = metadata.find((article) => article.slug === slug);

    if (!articleMetadata) {
        throw new BlogArticleNotFoundError(
            `Unable to locate blog article for slug "${slug}".`
        );
    }

    const markdownFileNames = await dependencies.readMarkdownFileNames();
    assertMetadataMatchesMarkdownFile(slug, markdownFileNames);

    const markdownFileName = toMarkdownFileName(slug);
    const markdown =
        await dependencies.readMarkdownByFileName(markdownFileName);

    return {
        ...articleMetadata,
        markdown,
        html: parseMarkdown(markdown),
        ...articleDates(articleMetadata),
    };
};
