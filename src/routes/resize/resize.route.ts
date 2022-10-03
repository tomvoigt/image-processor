import { Request, Response } from "express";
import { getOutputPath } from "../../utilities";

export const resizeRoute = (req: Request, res: Response): void => {
  res.sendFile(getOutputPath(req));
};
