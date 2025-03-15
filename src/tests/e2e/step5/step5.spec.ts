import { test } from "playwright/test";
import { expect } from "@playwright/test";

test.describe("Etape 5 - Créer un formulaire de recherche", () => {
  test("Afficher le formulaire", async ({ page }) => {
    await page.goto("/search");

    // Ajout de la balise form
    const form = page.getByRole("form", { name: "search" });
    await expect(page.getByRole("form")).toBeVisible();

    // Ajout du text input
    const queryTextBox = form.getByRole("textbox");
    await expect(queryTextBox).toBeVisible();

    // Ajout du bouton de submit
    const submitButton = form.getByRole("button", { name: "Search" });
    await expect(submitButton).toBeVisible();
  });

  test("On remplit le formulaire et on recherche la Milky Way. On attend plusieurs cards en sortie.", async ({
    page,
  }) => {
    await page.goto("/search");

    const form = page.getByRole("form", { name: "search" });
    await form.getByRole("textbox").fill("Milky Way");
    await form.getByRole("button", { name: "Search" }).click();

    const cards = page.getByRole("article");
    expect(await cards.count()).toBe(5);
  });
});
