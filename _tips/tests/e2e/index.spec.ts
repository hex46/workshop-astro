import { test, expect } from "@playwright/test";

test.skip("title component is present", async ({ page }) => {
  // Go to home
  await page.goto("http://localhost:4321/");

  // Test <h2>
  await expect(
    page.getByRole("heading", {
      name: "The Infrared Face of the Andromeda Galaxy",
      level: 2,
    }),
  ).toBeVisible();
});
