import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRoutesStub } from 'react-router';
import BlogLandingRoute from '../blog._index/route';

afterEach(() => {
    cleanup();
});

describe('blog landing route', () => {
    const RemixStub = createRoutesStub([
        {
            path: '/blog',
            Component: BlogLandingRoute,
            loader: async () => ({
                articles: [
                    {
                        slug: 'first-post',
                        title: 'First Post',
                        description: 'The first post.',
                        publishedAt: '2026-01-15T08:00:00.000Z',
                        updatedAt: '2026-01-20T08:00:00.000Z',
                    },
                ],
            }),
        },
    ]);

    it('renders the blog landing heading', async () => {
        render(<RemixStub initialEntries={['/blog']} />);

        expect(
            await screen.findByRole('heading', { name: /blog/i })
        ).toBeInTheDocument();
    });

    it('renders article title and description from loader data', async () => {
        render(<RemixStub initialEntries={['/blog']} />);

        expect(await screen.findByText('First Post')).toBeInTheDocument();
        const articleDescriptions =
            await screen.findAllByText('The first post.');

        expect(articleDescriptions.length).toBeGreaterThanOrEqual(1);
    });

    it('renders link to article details page', async () => {
        render(<RemixStub initialEntries={['/blog']} />);

        const articleLinks = await screen.findAllByRole('link', {
            name: /read article/i,
        });

        expect(articleLinks[0]).toHaveAttribute('href', '/blog/first-post');
    });
});
