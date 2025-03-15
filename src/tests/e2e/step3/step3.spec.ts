import { expect, test } from "@playwright/test";

test.describe("Etape 3 - créer une page /planets/[id].astro présentant les différentes planètes du système solaire", () => {
  test("Afficher la planète Terre", async ({ page }) => {
    await page.goto("/planets/earth");

    //Afficher le titre de l'onglet
    expect(await page.title()).toBe("Earth");

    // Afficher un titre
    const titreH2 = page.getByRole("heading", {
      name: "View of Earth photographed by Apollo 15 on voyage to the Moon",
      level: 2,
    });
    await expect(titreH2).toBeVisible();

    // Afficher une image
    const image = page.getByRole("img");
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute(
      "alt",
      "View of Earth photographed by Apollo 15 on voyage to the Moon",
    );

    // Afficher la description
    const textDescription =
      "AS15-91-12343 (26 July 1971) --- This view of Earth was photographed by the Apollo 15 crewmen as they sped toward the fourth lunar landing. The spacecraft was between 25,000 and 30,000 nautical miles from Earth when this photo was made. The United States (note Florida), Central America and part of Canada can be seen at the left side of the picture, with South America at lower center. Spain and the northwest part of Africa can be seen at right. The Bahamas Banks, unique geological feature, can be seen (different shade of blue) east of Florida. Also note large North Atlantic storm front moving over Greenland in upper center.";
    const description = page.getByRole("paragraph").getByText(textDescription);
    await expect(description).toBeVisible();

    // Ajouter un lien
    const links = page.getByRole("link", { name: "Source" });
    await expect(links).toBeVisible();
    await expect(links).toHaveAttribute(
      "href",
      "https://images.nasa.gov/details/as15-91-12343",
    );
  });

  test("Afficher la planète Jupiter", async ({ page }) => {
    await page.goto("/planets/jupiter");

    //Afficher le titre de l'onglet
    expect(await page.title()).toBe("Jupiter");

    // Afficher un titre
    const titreH2 = page.getByRole("heading", {
      name: "Hubble Captures Vivid Auroras in Jupiter’s Atmosphere",
      level: 2,
    });
    await expect(titreH2).toBeVisible();

    // Afficher une image
    const image = page.getByRole("img");
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute(
      "alt",
      "Hubble Captures Vivid Auroras in Jupiter’s Atmosphere",
    );

    // Afficher la description
    const textDescription1 =
      "Astronomers are using the NASA/ESA Hubble Space Telescope to study auroras — stunning light shows in a planet’s atmosphere — on the poles of the largest planet in the solar system, Jupiter. This observation program is supported by measurements made by NASA’s Juno spacecraft, currently on its way to Jupiter.";
    const description1 = page
      .getByRole("paragraph")
      .getByText(textDescription1);
    await expect(description1).toBeVisible();

    const textDescription2 =
      "Jupiter, the largest planet in the solar system, is best known for its colorful storms, the most famous being the Great Red Spot. Now astronomers have focused on another beautiful feature of the planet, using Hubble’s ultraviolet capabilities.";
    const description2 = page
      .getByRole("paragraph")
      .getByText(textDescription2);
    await expect(description2).toBeVisible();

    // Ajouter un lien
    const links = page.getByRole("link", { name: "Source" });
    await expect(links).toBeVisible();
    await expect(links).toHaveAttribute(
      "href",
      "https://images.nasa.gov/details/hubble-captures-vivid-auroras-in-jupiters-atmosphere_28000029525_o",
    );
  });

  test("Afficher la planète Mars", async ({ page }) => {
    await page.goto("/planets/mars");

    //Afficher le titre de l'onglet
    expect(await page.title()).toBe("Mars");

    // Afficher un titre
    const titreH2 = page.getByRole("heading", {
      name: "Global Color Views of Mars",
      level: 2,
    });
    await expect(titreH2).toBeVisible();

    // Afficher une image
    const image = page.getByRole("img");
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute("alt", "Global Color Views of Mars");

    // Afficher la description
    const textDescription = "Global Color Views of Mars";
    const description = page.getByRole("paragraph").getByText(textDescription);
    await expect(description).toBeVisible();

    // Ajouter un lien
    const links = page.getByRole("link", { name: "Source", exact: true });
    await expect(links).toBeVisible();
    await expect(links).toHaveAttribute(
      "href",
      "http://photojournal.jpl.nasa.gov/catalog/PIA00407",
    );
  });

  test("Afficher la planète Mercure", async ({ page }) => {
    await page.goto("/planets/mercury");

    //Afficher le titre de l'onglet
    expect(await page.title()).toBe("Mercury");

    // Afficher un titre
    const titreH2 = page.getByRole("heading", {
      name: "Hello, Mercury!",
      level: 2,
    });
    await expect(titreH2).toBeVisible();

    // Afficher une image
    const image = page.getByRole("img");
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute("alt", "Hello, Mercury!");

    // Afficher la description
    const textDescription = "Hello, Mercury!";
    const description = page.getByRole("paragraph").getByText(textDescription);
    await expect(description).toBeVisible();

    // Ajouter un lien
    const links = page.getByRole("link", { name: "Source", exact: true });
    await expect(links).toBeVisible();
    await expect(links).toHaveAttribute(
      "href",
      "https://images.nasa.gov/details/PIA12262",
    );
  });

  test("Afficher la planète Neptune", async ({ page }) => {
    await page.goto("/planets/neptune");

    //Afficher le titre de l'onglet
    expect(await page.title()).toBe("Neptune");

    // Afficher un titre
    const titreH2 = page.getByRole("heading", {
      name: "Neptune Scooter",
      level: 2,
    });
    await expect(titreH2).toBeVisible();

    // Afficher une image
    const image = page.getByRole("img");
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute("alt", "Neptune Scooter");

    // Afficher la description
    const textDescription =
      "This photograph of Neptune was reconstructed from two images taken by NASA Voyager 2. At the north top is the Great Dark Spot, accompanied by bright, white clouds that undergo rapid changes in appearance.";
    const description = page.getByRole("paragraph").getByText(textDescription);
    await expect(description).toBeVisible();

    // Ajouter un lien
    const links = page.getByRole("link", { name: "Source", exact: true });
    await expect(links).toBeVisible();
    await expect(links).toHaveAttribute(
      "href",
      "https://images.nasa.gov/details/PIA01142",
    );
  });

  test("Afficher la planète Saturne", async ({ page }) => {
    await page.goto("/planets/saturn");

    //Afficher le titre de l'onglet
    expect(await page.title()).toBe("Saturn");

    // Afficher un titre
    const titreH2 = page.getByRole("heading", {
      name: "Saturn, Approaching Northern Summer",
      level: 2,
    });
    await expect(titreH2).toBeVisible();

    // Afficher une image
    const image = page.getByRole("img");
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute(
      "alt",
      "Saturn, Approaching Northern Summer",
    );

    // Afficher la description
    const textDescription =
      "Since NASA’s Cassini spacecraft arrived at Saturn in mid-2004, the planet’s appearance has changed greatly. The shifting angle of sunlight as the seasons march forward has illuminated the giant hexagon-shaped jet stream around the north polar region, and the subtle bluish hues seen earlier in the mission have continued to fade. Earlier views obtained in 2004 and 2009 (see PIA06077 and PIA11667) demonstrate how drastically the illumination has changed.";
    const description = page.getByRole("paragraph").getByText(textDescription);
    await expect(description).toBeVisible();

    // Ajouter un lien
    const links = page.getByRole("link", { name: "Source", exact: true });
    await expect(links).toBeVisible();
    await expect(links).toHaveAttribute(
      "href",
      "https://images.nasa.gov/details/PIA03152",
    );
  });

  test("Afficher la planète Uranus", async ({ page }) => {
    await page.goto("/planets/uranus");

    //Afficher le titre de l'onglet
    expect(await page.title()).toBe("Uranus");

    // Afficher un titre
    const titreH2 = page.getByRole("heading", {
      name: "Hubble Reveals Dynamic Atmospheres of Uranus, Neptune",
      level: 2,
    });
    await expect(titreH2).toBeVisible();

    // Afficher une image
    const image = page.getByRole("img");
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute(
      "alt",
      "Hubble Reveals Dynamic Atmospheres of Uranus, Neptune",
    );

    // Afficher la description
    const textDescription1 =
      "This Hubble Space Telescope Wide Field Camera 3 image of Uranus, taken in November 2018, reveals a vast, bright stormy cloud cap across the planet’s north pole.";
    const description1 = page
      .getByRole("paragraph")
      .getByText(textDescription1);
    await expect(description1).toBeVisible();

    const textDescription2 =
      "Credits: NASA, ESA, A. Simon (NASA Goddard Space Flight Center), and M.H. Wong and A. Hsu (University of California, Berkeley)";
    const description2 = page
      .getByRole("paragraph")
      .getByText(textDescription2);
    await expect(description2).toBeVisible();

    // Ajouter un lien
    const links = page.getByRole("link", { name: "Source", exact: true });
    await expect(links).toBeVisible();
    await expect(links).toHaveAttribute(
      "href",
      "https://images.nasa.gov/details/stsci-h-p1906c-f-514x514.a",
    );
  });

  test("Afficher la planète Venus", async ({ page }) => {
    await page.goto("/planets/venus");

    //Afficher le titre de l'onglet
    expect(await page.title()).toBe("Venus");

    // Afficher un titre
    const titreH2 = page.getByRole("heading", {
      name: "Venus from Mariner 10",
      level: 2,
    });
    await expect(titreH2).toBeVisible();

    // Afficher une image
    const image = page.getByRole("img");
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute("alt", "Venus from Mariner 10");

    // Afficher la description
    const textDescription1 =
      "As it sped away from Venus, NASA’s Mariner 10 spacecraft captured this seemingly peaceful view of a planet the size of Earth, wrapped in a dense, global cloud layer. But, contrary to its serene appearance, the clouded globe of Venus is a world of intense heat, crushing atmospheric pressure and clouds of corrosive acid.";
    const description1 = page
      .getByRole("paragraph")
      .getByText(textDescription1);
    await expect(description1).toBeVisible();

    const textDescription2 =
      "This newly processed image revisits the original data with modern image processing software. A contrast-enhanced version of this view, also provided here, makes features in the planet’s thick cloud cover visible in greater detail.";
    const description2 = page
      .getByRole("paragraph")
      .getByText(textDescription2);
    await expect(description2).toBeVisible();

    // Ajouter un lien
    const links = page.getByRole("link", { name: "Source", exact: true });
    await expect(links).toBeVisible();
    await expect(links).toHaveAttribute(
      "href",
      "https://images.nasa.gov/details/PIA23791",
    );
  });

  test("Afficher une page 404 pour Pluton", async ({ page }) => {
    await page.goto("/planets/pluto");

    //Afficher le titre de l'onglet
    expect(await page.title()).toBe("404: Not Found");
  });
});
