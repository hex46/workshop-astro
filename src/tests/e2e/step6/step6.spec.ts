import { test } from "playwright/test";
import { expect } from "@playwright/test";

test.describe("Etape 6 - Gérer les résultats du formulaire", () => {
  test("Afficher le lien de redirection vers la page du résultat", async ({
    page,
  }) => {
    await page.goto("/search");

    const form = page.getByRole("form", { name: "search" });
    await form.getByRole("textbox").fill("Milky Way");
    await form.getByRole("button", { name: "Search" }).click();

    const cards = page.getByRole("article");
    const goToPage = cards.first().getByRole("link", { name: "Read more..." });
    await expect(goToPage).toBeVisible();
  });

  test("On clique sur le lien pour être redirigé sur la page dédiée à la Milky Way", async ({
    page,
  }) => {
    await page.goto("/search");

    const form = page.getByRole("form", { name: "search" });
    await form.getByRole("textbox").fill("Milky Way");
    await form.getByRole("button", { name: "Search" }).click();

    const cards = page.getByRole("article");
    const goToPage = cards.first().getByRole("link", { name: "Read more..." });
    await goToPage.click();

    await page.waitForURL("**/search/PIA03239");
  });
});
