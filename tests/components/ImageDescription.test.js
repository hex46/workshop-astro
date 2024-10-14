import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import ImageDescription from "../../components/ImageDescription.astro";

test("Image Description with title", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(ImageDescription, {
    slots: {
      default: "Card content",
    },
  });

  expect(result).toContain("The Infrared Face of the Andromeda Galaxy");
});
