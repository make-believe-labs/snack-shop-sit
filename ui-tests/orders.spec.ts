import { test, expect } from '@playwright/test';

const snackShopUrl = 'https://lab.fullsnacktester.com/'

test('test', async ({ page }) => {
    await page.goto(`${snackShopUrl}/orders`);
    await expect(page.getByRole('heading', { name: 'Orders' })).toBeVisible();
});