import { NextFunction, Request, Response } from "express";
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { outputBasePath } from "../../utilities/constants";

export const createOutputFolder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!existsSync(outputBasePath)) {
    await mkdir(outputBasePath);
  }

  next();
};
