import { test, expect } from '@playwright/test';
import { MAIN_PAGE_DESCRIPTION, MAIN_PAGE_TITLE } from '~/constants/metadata';
import {
    MAIN_HEADING_TEXT,
    MAIN_SUBHEADING_TEXT,
} from '~/routes/_index/constants';

test(`has title "${MAIN_PAGE_TITLE}"`, async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(MAIN_PAGE_TITLE);
});

test(`has description "${MAIN_PAGE_DESCRIPTION}"`, async ({ page }) => {
    await page.goto('/');

    const metaDescription = page.locator('meta[name="description"]');

    await expect(metaDescription).toHaveAttribute(
        'content',
        MAIN_PAGE_DESCRIPTION
    );
});

test(`has main heading text of "${MAIN_HEADING_TEXT}"`, async ({ page }) => {
    await page.goto('/');

    await expect(
        page.getByRole('heading', { name: MAIN_HEADING_TEXT })
    ).toBeVisible();
});

test(`has subheading text of "${MAIN_SUBHEADING_TEXT}"`, async ({ page }) => {
    await page.goto('/');

    await expect(
        page.getByRole('heading', { name: MAIN_SUBHEADING_TEXT })
    ).toBeVisible();
});

test('GitHub link', async ({ page, context }) => {
    await page.goto('/');

    // Click the GitHub link.
    const [newPage] = await Promise.all([
        context.waitForEvent('page'), // Wait for the new tab to open
        page.getByRole('link', { name: 'My GitHub Profile' }).click(),
    ]);

    await newPage.waitForURL('https://github.com/justinfarrelldev');

    expect(newPage.url()).toBe('https://github.com/justinfarrelldev');
});

test('LinkedIn link', async ({ page, context }) => {
    await page.goto('/');

    // Click the LinkedIn link.
    const [newPage] = await Promise.all([
        context.waitForEvent('page'), // Wait for the new tab to open
        page.getByRole('link', { name: 'My LinkedIn Profile' }).click(),
    ]);

    await newPage.waitForURL(
        'https://www.linkedin.com/in/justin-farrell-web-dev/'
    );

    expect(newPage.url()).toBe(
        'https://www.linkedin.com/in/justin-farrell-web-dev/'
    );
});

test('Email link', async ({ page }) => {
    await page.goto('/');

    // Since email link will need to launch email client, it is outside the scope of Playwright

    const mailLink = page.getByRole('link', { name: 'Email Me' });

    await expect(mailLink).toHaveAttribute('href', /^mailto:/);
});
