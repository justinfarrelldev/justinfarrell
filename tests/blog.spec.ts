import { expect, test } from '@playwright/test';

test.describe('blog routes', () => {
    test('renders consistent UTC dates regardless of browser timezone', async ({
        browser,
    }) => {
        const context = await browser.newContext({
            timezoneId: 'Pacific/Honolulu',
        });
        const page = await context.newPage();
        try {
            for (const url of ['/blog', '/blog/introducing-the-blog']) {
                await page.goto(url);
                await expect(
                    page.getByText('Posted: Mar 1, 2026, 6:00 PM UTC', {
                        exact: true,
                    })
                ).toBeVisible();
            }
        } finally {
            await context.close();
        }
    });

    test('renders blog landing page with expected styling', async ({
        page,
    }) => {
        await page.goto('/blog');

        await expect(
            page.getByRole('heading', { name: 'Blog', exact: true }).first()
        ).toBeVisible();

        const main = page.locator('main').first();

        await expect(main).toHaveClass(/bg-black/);
        await expect(main).toHaveClass(/from-primary\/20/);
        await expect(page.locator('#tsparticles')).toHaveCount(0);
    });

    test('returns a 404 for an unknown article', async ({ page }) => {
        const response = await page.goto('/blog/no-such-article');

        expect(response?.status()).toBe(404);
        await expect(
            page.getByRole('heading', { name: 'Article not found' })
        ).toBeVisible();
    });

    test('renders article page from markdown slug route', async ({ page }) => {
        await page.goto('/blog/introducing-the-blog');

        await expect(
            page.getByRole('heading', { name: 'Introducing the Blog' }).first()
        ).toBeVisible();
        await expect(
            page.getByText(/Welcome to the blog section of my site/i)
        ).toBeVisible();

        const articleContent = page.getByTestId('blog-article-content');

        await expect(
            articleContent.getByRole('heading', {
                level: 2,
                name: 'What to expect',
            })
        ).toBeVisible();

        await expect(
            articleContent.getByRole('heading', {
                level: 2,
                name: 'A simple publishing workflow',
            })
        ).toBeVisible();
    });
});
