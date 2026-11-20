


import { test, expect } from "@playwright/test";

test('Handling childframes', async ({ page }) => {

    await page.goto('https://qa.randomly.online/practice/deep-dom');

    await page.pause();

    // Handling Parent Frame
    const frame1 = page.frameLocator('#frame-level-1');

    // Handling Child Frame
    const frame2 = frame1.frameLocator('#frame-level-2');

    // Handling Grandchild Frame
    const frame3 = frame2.frameLocator('#frame-level-3');

    // Locate and validate button
    const button = frame3.locator('#deep-button');

    await expect(button).toBeVisible();

    // Click button
    await button.click();

});
