import { NextFunction, Request, Response } from "express";
import { existsSync } from "fs";
import { join } from "path";
import { getOutputPath, inputBasePath, resizeImage } from "../utilities";

export const resizeImageMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { filename, width, height } = req.query;
  const inputPath = join(inputBasePath, `${filename}.jpg`);
  const outputPath = getOutputPath(req);

  if (!existsSync(inputPath)) {
    res.sendStatus(404);
  }

  try {
    await resizeImage(
      inputPath,
      outputPath,
      width?.toString() ?? "",
      height?.toString() ?? ""
    );
  } catch (error) {
    res.status(500);
  }

  next();
};
