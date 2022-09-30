import { Request, Response } from "express";

export const api = async (_: Request, res: Response) => {
  res.sendStatus(403);
};
