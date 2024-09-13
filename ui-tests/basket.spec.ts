import { test, expect } from '@playwright/test';

const snackShopUrl = 'https://lab.fullsnacktester.com/'

test('test', async ({ page }) => {
    await page.goto(`${snackShopUrl}/basket`);
    await expect(page.getByRole('heading', { name: 'Basket' })).toBeVisible();
});