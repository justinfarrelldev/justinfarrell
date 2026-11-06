import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRoutesStub } from 'react-router';
import BlogArticleRoute, { ErrorBoundary } from '../blog.$slug/route';

afterEach(() => {
    cleanup();
});

describe('blog article route', () => {
    const RemixStub = createRoutesStub([
        {
            path: '/blog/:slug',
            Component: BlogArticleRoute,
            loader: async () => ({
                article: {
                    slug: 'first-post',
                    title: 'First Post',
                    description: 'The first post.',
                    markdown:
                        '# this should be H1\n\n## this should be H2\n\nHello from markdown.',
                    html: '<h1>this should be H1</h1><h2>this should be H2</h2><p>Hello from markdown.</p>',
                    publishedAt: '2026-01-15T08:00:00.000Z',
                    updatedAt: '2026-01-20T08:00:00.000Z',
                },
            }),
        },
    ]);

    it('renders article heading from loader data', async () => {
        render(<RemixStub initialEntries={['/blog/first-post']} />);

        const articleHeadings = await screen.findAllByRole('heading', {
            name: 'First Post',
        });

        expect(articleHeadings.length).toBeGreaterThanOrEqual(1);
    });

    it('renders html article content', async () => {
        render(<RemixStub initialEntries={['/blog/first-post']} />);

        expect(await screen.findByText('Hello from markdown.')).toBeVisible();
    });

    it('renders markdown headings as semantic html headings', async () => {
        render(<RemixStub initialEntries={['/blog/first-post']} />);

        expect(
            await screen.findByRole('heading', {
                level: 1,
                name: 'this should be H1',
            })
        ).toBeVisible();

        expect(
            await screen.findByRole('heading', {
                level: 2,
                name: 'this should be H2',
            })
        ).toBeVisible();
    });

    it.each([
        [404, 'Article not found'],
        [500, 'Unable to load article'],
    ])(
        'renders an appropriate error boundary for status %i',
        async (status, heading) => {
            const ErrorStub = createRoutesStub([
                {
                    path: '/blog/:slug',
                    Component: BlogArticleRoute,
                    ErrorBoundary,
                    loader: () => {
                        throw new Response(null, { status });
                    },
                },
            ]);
            render(<ErrorStub initialEntries={['/blog/missing']} />);

            expect(
                await screen.findByRole('heading', { name: heading })
            ).toBeVisible();
        }
    );
});
