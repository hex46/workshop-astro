import { test, expect } from "@playwright/test";

test("title component is present", async ({ page }) => {
  await page.goto("http://localhost:4321/");

  await expect(
    page.getByRole("heading", {
      name: "The Infrared Face of the Andromeda Galaxy",
      level: 2,
    }),
  ).toBeVisible();
});
