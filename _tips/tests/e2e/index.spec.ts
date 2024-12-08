import { test, expect } from "@playwright/test";

test("title is present", async ({ page }) => {
  // Go to home
  await page.goto("http://localhost:4321/");

  // Test <h1>
  await expect(
    page.getByRole("heading", {
      name: "Hello there!",
      level: 1,
    }),
  ).toBeVisible();
});
