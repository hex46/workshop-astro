import { test, expect } from "@playwright/test";

test("Today page", async ({ page }) => {
  await page.goto("/today");

  await expect(page.getByText("Source")).toBeVisible();
});
