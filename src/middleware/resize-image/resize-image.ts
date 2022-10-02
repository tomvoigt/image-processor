import { NextFunction, Request, Response } from "express";
import { existsSync } from "fs";
import { join } from "path";
import sharp from "sharp";
import { getOutputPath, inputBasePath } from "../../utilities";

export const resizeImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { filename, width, height } = req.query;
  const inputPath = join(inputBasePath, `${filename}.jpg`);
  const outputPath = getOutputPath(req);
  const isCached = existsSync(outputPath);

  if (!existsSync(inputPath)) {
    res.sendStatus(404);
  }

  if (!isCached) {
    try {
      await sharp(inputPath)
        .resize({
          width: Number(width),
          height: Number(height),
        })
        .toFile(outputPath);
    } catch (error) {
      res.status(500);
    }
  }

  next();
};
