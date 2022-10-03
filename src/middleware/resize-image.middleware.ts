import { NextFunction, Request, Response } from "express";
import { existsSync } from "fs";
import { join } from "path";
import { getOutputPath, inputBasePath, resizeImage } from "../utilities";

export const resizeImageMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<unknown, Record<string, unknown>> | undefined> => {
  const { filename, width, height } = req.query;
  const inputPath = join(inputBasePath, `${filename}.jpg`);
  const outputPath = getOutputPath(req);

  if (!existsSync(inputPath)) {
    return res
      .status(404)
      .send(
        "The provided image is not available as input for processing. Please try another one."
      );
  }

  try {
    await resizeImage(
      inputPath,
      outputPath,
      width?.toString() ?? "",
      height?.toString() ?? ""
    );
  } catch (error) {
    res.status(500).send("Something went wrong with processing the image.");
  }

  next();
};
