import { Request, Response } from "express";

export const api = (req: Request, res: Response): void => {
  res.sendStatus(403);
};
