import { existsSync } from "fs";
import sharp from "sharp";

export const resizeImage = async (
  inputPath: string,
  outputPath: string,
  width: string,
  height: string
) => {
  const isCached = existsSync(outputPath);

  if (!isCached) {
    await sharp(inputPath)
      .resize({
        width: Number(width),
        height: Number(height),
      })
      .toFile(outputPath);
  }
};
