import { expect, test } from "@playwright/test";

test.describe("Etape 5 - Afficher l'image du jour (ou APOD de la NASA)", () => {
  test.beforeEach("Accueil", async ({ page }) => {
    await page.goto("/");
  });

  test("Afficher l'image du jour", async ({ page }) => {
    await page.goto("/today");

    // Afficher une image OU une vidéo
    const image = page.getByRole("img");
    const iframeVideo = page
      .frameLocator('[src="https://www.youtube.com/embed/*"]')
      .owner();
    await expect(image.or(iframeVideo)).toBeVisible();

    // Afficher un titre
    const titreH2 = page.getByRole("heading", {
      level: 2,
    });
    await expect(titreH2).toBeVisible();

    // Afficher une description
    const description = await page.getByRole("paragraph").all();
    await expect(description[0]).toBeVisible();

    // Ajouter un lien
    const links = page.getByRole("link", { name: "Source" });
    await expect(links).toBeVisible();
  });
});
