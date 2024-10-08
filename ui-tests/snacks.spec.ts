import { test, expect } from '@playwright/test';

const snackShopUrl = 'https://lab.fullsnacktester.com'

test('test', async ({ page }) => {
    await page.goto(`${snackShopUrl}`);
    await page.getByTestId('storeSnack_0').getByRole('button', { name: 'Add' }).click();
    await page.getByTestId('storeSnack_1').getByRole('button', { name: 'Add' }).click();
    await page.getByTestId('storeSnack_2').getByRole('button', { name: 'Add' }).click();
    await page.getByRole('link', { name: 'Basket (3)' }).click();
    await expect(page.getByTestId('basketSnack_0').getByRole('heading', { name: 'Snacktastic Mixed Nuts' })).toBeVisible();
});