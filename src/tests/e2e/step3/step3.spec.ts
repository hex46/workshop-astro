import { expect, test } from "@playwright/test";

test.describe("Etape 3 - créer un composant Astro permettant la navigation entre les pages", () => {
  test.beforeEach("Accueil", async ({ page }) => {
    await page.goto("/");
  });

  [
    { name: "Earth", expectedPage: "**/planets/earth" },
    { name: "Jupiter", expectedPage: "**/planets/jupiter" },
    { name: "Mars", expectedPage: "**/planets/mars" },
    { name: "Mercury", expectedPage: "**/planets/mercury" },
    { name: "Neptune", expectedPage: "**/planets/neptune" },
    { name: "Saturn", expectedPage: "**/planets/saturn" },
    { name: "Uranus", expectedPage: "**/planets/uranus" },
    { name: "Venus", expectedPage: "**/planets/venus" },
  ].forEach(({ name, expectedPage }) => {
    test(`Navigation vers la page : ${name}`, async ({ page }) => {
      const navigation = page.getByRole("navigation");
      const navLink = navigation.getByRole("link", { name: name });

      await expect(navLink).toBeVisible();
      await navLink.click();

      await page.waitForURL(expectedPage);
    });
  });
});
