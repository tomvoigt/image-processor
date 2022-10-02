import { Request } from "express";
import path from "path";
import { outputBasePath } from "./constants";

export const getOutputPath = (req: Request) =>
  path.resolve(
    outputBasePath,
    `${req.query.filename}-${req.query.width}x${req.query.height}.jpg`
  );
