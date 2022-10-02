import { Request, Response } from "express";

export const api = async (req: Request, res: Response) => {
  res.sendStatus(403);
};
