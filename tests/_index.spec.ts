import { test, expect } from '@playwright/test';
import { MAIN_PAGE_DESCRIPTION, MAIN_PAGE_TITLE } from '~/constants/metadata';
import { MAIN_HEADING_TEXT } from '~/routes/_index/constants';

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
