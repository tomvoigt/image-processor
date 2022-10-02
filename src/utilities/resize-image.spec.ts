import { existsSync } from "fs";
import { resolve } from "path";
import { inputBasePath, outputBasePath } from "./constants";
import { resizeImage } from "./resize-image";

describe("resizeImage", () => {
  it("should resize the image based on provided input", async () => {
    const width = "123";
    const height = "123";
    const filename = "fjord.jpg";

    const inputPath = resolve(inputBasePath, filename);
    const outputPath = resolve(outputBasePath, filename);

    await resizeImage(inputPath, outputPath, width, height);

    expect(existsSync(outputPath)).toBe(true);
  });
});
