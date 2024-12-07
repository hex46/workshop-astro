import { test, expect } from "@playwright/test";

test.skip("Today page", async ({ page }) => {
  // Go to home
  await page.goto("/today");

  // Test text
  await expect(page.getByText("Source")).toBeVisible();
});
