import { describe, expect, it } from 'vitest';
import {
    getBlogArticleBySlug,
    getBlogSummaries,
    type BlogDataDependencies,
} from './blogData';

const makeDependencies = (): BlogDataDependencies => {
    const markdownByFile: Record<string, string> = {
        'first-post.md': '# First Post\n\nHello from markdown.',
        'second-post.md': '# Second Post\n\nAnother article.',
    };

    return {
        readMetadata: async () => [
            {
                slug: 'first-post',
                title: 'First Post',
                description: 'The first post.',
                publishedAt: '2026-01-15T08:00:00.000Z',
                updatedAt: '2026-01-20T08:00:00.000Z',
            },
            {
                slug: 'second-post',
                title: 'Second Post',
                description: 'The second post.',
                publishedAt: '2026-02-01T08:00:00.000Z',
                updatedAt: '2026-02-05T08:00:00.000Z',
            },
        ],
        readMarkdownFileNames: async () => Object.keys(markdownByFile),
        readMarkdownByFileName: async (fileName: string) => {
            const article = markdownByFile[fileName];
            if (!article) {
                throw new Error(`No markdown content for ${fileName}`);
            }
            return article;
        },
    };
};

describe('blog data utilities', () => {
    describe('getBlogSummaries', () => {
        it('returns summaries sorted by published date descending', async () => {
            const summaries = await getBlogSummaries(makeDependencies());

            expect(summaries[0]?.slug).toBe('second-post');
            expect(summaries[1]?.slug).toBe('first-post');
        });

        it('uses metadata dates rather than deployment filesystem timestamps', async () => {
            const summaries = await getBlogSummaries(makeDependencies());

            expect(summaries[0]?.publishedAt).toBe('2026-02-01T08:00:00.000Z');
            expect(summaries[0]?.updatedAt).toBe('2026-02-05T08:00:00.000Z');
        });

        it('throws when metadata references a missing markdown file', async () => {
            const dependencies = makeDependencies();

            const invalidDependencies: BlogDataDependencies = {
                ...dependencies,
                readMetadata: async () => [
                    ...((await dependencies.readMetadata()) ?? []),
                    {
                        slug: 'does-not-exist',
                        title: 'Missing',
                        description: 'Missing markdown.',
                        publishedAt: '2026-03-01T00:00:00.000Z',
                    },
                ],
            };

            await expect(getBlogSummaries(invalidDependencies)).rejects.toThrow(
                /does-not-exist/
            );
        });
    });

    describe('getBlogArticleBySlug', () => {
        it('returns article content for a valid slug', async () => {
            const article = await getBlogArticleBySlug(
                'first-post',
                makeDependencies()
            );

            expect(article.slug).toBe('first-post');
            expect(article.title).toBe('First Post');
            expect(article.html).toContain('<h1>First Post</h1>');
        });

        it('throws when the slug is missing', async () => {
            await expect(
                getBlogArticleBySlug('missing', makeDependencies())
            ).rejects.toThrow(/missing/);
        });

        it('removes unsafe HTML and URLs while preserving Markdown formatting', async () => {
            const article = await getBlogArticleBySlug('first-post', {
                ...makeDependencies(),
                readMarkdownByFileName: async () =>
                    '# Safe heading\n\n**Bold** and [safe](https://example.com).\n\n<script>alert(1)</script><img src="x" onerror="alert(1)"><a href="javascript:alert(1)">bad</a>',
            });

            expect(article.html).toContain('<h1>Safe heading</h1>');
            expect(article.html).toContain('<strong>Bold</strong>');
            expect(article.html).toContain('href="https://example.com"');
            expect(article.html).not.toMatch(/script|onerror|javascript:/i);
        });

        it('defaults the updated date to the publication date', async () => {
            const dependencies = makeDependencies();
            const article = await getBlogArticleBySlug('first-post', {
                ...dependencies,
                readMetadata: async () => [
                    {
                        slug: 'first-post',
                        title: 'First Post',
                        description: 'The first post.',
                        publishedAt: '2026-01-15T08:00:00.000Z',
                    },
                ],
            });

            expect(article.updatedAt).toBe(article.publishedAt);
        });

        it('returns markdown source as part of the article payload', async () => {
            const article = await getBlogArticleBySlug(
                'second-post',
                makeDependencies()
            );

            expect(article.markdown).toContain('Another article.');
        });
    });
});
