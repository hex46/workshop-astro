import { test, expect } from "@playwright/test";
import today from "@/mock/data/today.json";

test("mocks a fruit and doesn't call api", async ({ page }) => {
  // Mock the api call before navigating
  await page.route("**/planetary/apod*", async (route) => {
    await route.fulfill({ json: today });
  });
  // Go to the page
  await page.goto("/today");

  await expect(page.getByText("Source")).toBeVisible();
});
