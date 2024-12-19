import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import SimpleComponent from "src/components/SimpleComponent.astro";

test("SimpleComponent", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(SimpleComponent, {
    props: {
      title: "Hey",
    },
  });

  expect(result).toContain("Hey");
});
