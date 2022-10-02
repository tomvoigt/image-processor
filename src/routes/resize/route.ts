import { Request, Response } from "express";
import { getOutputPath } from "../../utilities";

export const resizeRoute = (req: Request, res: Response) => {
  res.sendFile(getOutputPath(req));
};
