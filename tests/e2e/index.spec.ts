import { test, expect } from "@playwright/test";

test("title is correct", async ({ page }) => {
  await page.goto("http://localhost:4321/");

  await expect(page).toHaveTitle("Home");
});
