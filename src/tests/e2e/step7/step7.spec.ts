import { test } from "playwright/test";
import { expect } from "@playwright/test";

test.describe("Etape 7 - Creer un formulaire de recherche et des cartes", () => {
  test("Afficher le formulaire SANS ACTION", async ({ page }) => {
    await page.goto("/search");

    // Ajout de la balise form
    const form = page.getByRole("form", {
      name: "Search",
    });
    await expect(form).toBeVisible();

    // Ajout du text input
    const queryTextBox = form.getByRole("textbox", { name: "query" });
    await expect(queryTextBox).toBeVisible();

    // Ajout du bouton de submit
    const submitButton = form.getByRole("button", { name: "Search" });
    await expect(submitButton).toBeVisible();
  });

  test("On rempli le formulaire et on recherche la Milky Way. On attend une card en sortie", async ({
    page,
  }) => {
    await page.goto("/search");

    const form = page.getByRole("form", {
      name: "Search",
    });
    await form.getByRole("textbox", { name: "query" }).fill("Milky Way");
    await form.getByRole("button", { name: "Search" }).click();

    const cards = page.getByTestId("card");
    expect(await cards.count()).toBe(1);
  });
});
