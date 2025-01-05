import { expect, test } from "@playwright/test";

test.describe("Etape 1 - créer une page .astro présentant la galaxie d'Andromède", () => {
  test.beforeEach("Accueil", async ({ page }) => {
    await page.goto("/");
  });

  test("Afficher la galaxie d'Andromède", async ({ page }) => {
    // Afficher une image
    const image = page.getByRole("img");
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute(
      "alt",
      "The Infrared Face of the Andromeda Galaxy",
    );

    // Afficher un titre
    const titreH2 = page.getByRole("heading", {
      name: "The Infrared Face of the Andromeda Galaxy",
      level: 2,
    });
    await expect(titreH2).toBeVisible();

    // Afficher la description
    const description = await page.getByRole("paragraph").all();
    await expect(description[0]).toBeVisible();
    await expect(description[0]).toHaveText(
      "This image from NASA's retired Spitzer Space Telescope highlights the stars and dust clouds in the Andromeda galaxy. One of Earth's nearest galactic neighbors, Andromeda spans a swath of sky nearly 3.8 degrees across, which is close to the width of eight full Moons lined up side by side. The area around the galaxy includes data from NASA's Wide-field Infrared Survey Explorer (WISE).",
    );

    await expect(description[1]).toBeVisible();
    await expect(description[1]).toHaveText(
      "Spitzer observed infrared light, a range of wavelengths longer than what human eyes can detect. In this image, starlight glows blue and cyan (representing infrared wavelengths of 3.6 and 4.5 microns). Dust dominates the galaxy in red (8 microns). The longest wavelength detected by Spitzer (24 microns) gives an indication of the dust's temperature and is represented in green; it combines with the red to create orange and yellow, indicating regions where stars are forming.",
    );

    // Ajouter un lien
    const links = page.getByRole("link", { name: "Source" });
    await expect(links).toBeVisible();
    await expect(links).toHaveAttribute(
      "href",
      "https://photojournal.jpl.nasa.gov/catalog/PIA2627",
    );
  });
});
