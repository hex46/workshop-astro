// Src: https://docs.astro.build/en/guides/testing/#vitest-and-container-api
// API : https://docs.astro.build/en/reference/container-reference/

import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import SimpleComponent from '../components/SimpleComponent.astro';

test.skip("Image Description with title", async () => {
  // Init container
  const container = await AstroContainer.create();
  // Render component **to string**
  const result = await container.renderToString(SimpleComponent, {props: { title : "The Infrared Face of the Andromeda Galaxy"}});

  // Test content
  expect(result).toContain("The Infrared Face of the Andromeda Galaxy");
  expect(result).toContain(
    "https://photojournal.jpl.nasa.gov/catalog/PIA26276",
  );
});
