import { test, expect } from '@playwright/test';
import { MAIN_PAGE_TITLE } from '~/constants/metadata';

test(`has title "${MAIN_PAGE_TITLE}"`, async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(MAIN_PAGE_TITLE);
});

// test('get started link', async ({ page }) => {
//     await page.goto('https://playwright.dev/');

//     // Click the get started link.
//     await page.getByRole('link', { name: 'Get started' }).click();

//     // Expects page to have a heading with the name of Installation.
//     await expect(
//         page.getByRole('heading', { name: 'Installation' })
//     ).toBeVisible();
// });
