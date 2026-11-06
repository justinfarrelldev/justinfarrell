import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import type { BlogDataDependencies, BlogArticleMetadata } from './blogData';

const metadataFilePath = path.join(
    process.cwd(),
    'app',
    'content',
    'blog',
    'articles.json'
);

const markdownDirectoryPath = path.join(
    process.cwd(),
    'app',
    'content',
    'blog',
    'posts'
);

const isIsoDate = (value: unknown): value is string =>
    typeof value === 'string' &&
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value) &&
    Number.isFinite(Date.parse(value)) &&
    new Date(value).toISOString() === value;

const parseMetadata = (rawJson: string): BlogArticleMetadata[] => {
    const parsed = JSON.parse(rawJson) as unknown;

    if (!Array.isArray(parsed)) {
        throw new Error('Blog metadata JSON must be an array.');
    }

    const slugs = new Set<string>();

    return parsed.map((item) => {
        if (!item || typeof item !== 'object') {
            throw new Error('Each blog metadata entry must be an object.');
        }

        const articleMetadata = item as Partial<BlogArticleMetadata>;

        if (
            typeof articleMetadata.slug !== 'string' ||
            !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(articleMetadata.slug) ||
            typeof articleMetadata.title !== 'string' ||
            !articleMetadata.title.trim() ||
            typeof articleMetadata.description !== 'string' ||
            !articleMetadata.description.trim() ||
            !isIsoDate(articleMetadata.publishedAt) ||
            (articleMetadata.updatedAt !== undefined &&
                (!isIsoDate(articleMetadata.updatedAt) ||
                    articleMetadata.updatedAt < articleMetadata.publishedAt))
        ) {
            throw new Error(
                'Invalid blog metadata: expected a URL-safe slug, title, description, and ISO UTC dates (updatedAt must not precede publishedAt).'
            );
        }

        if (slugs.has(articleMetadata.slug)) {
            throw new Error(`Duplicate blog slug: "${articleMetadata.slug}".`);
        }
        slugs.add(articleMetadata.slug);

        return {
            slug: articleMetadata.slug,
            title: articleMetadata.title,
            description: articleMetadata.description,
            publishedAt: articleMetadata.publishedAt,
            ...(articleMetadata.updatedAt === undefined
                ? {}
                : { updatedAt: articleMetadata.updatedAt }),
        };
    });
};

export const serverBlogDataDependencies: BlogDataDependencies = {
    readMetadata: async () => {
        const rawMetadata = await readFile(metadataFilePath, {
            encoding: 'utf-8',
        });

        return parseMetadata(rawMetadata);
    },
    readMarkdownFileNames: async () => {
        const files = await readdir(markdownDirectoryPath, {
            withFileTypes: true,
        });

        return files
            .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
            .map((entry) => entry.name);
    },
    readMarkdownByFileName: async (fileName: string) => {
        const markdownFilePath = path.join(markdownDirectoryPath, fileName);

        return readFile(markdownFilePath, {
            encoding: 'utf-8',
        });
    },
};
