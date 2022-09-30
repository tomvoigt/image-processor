import { Request, Response } from "express";

const api = async (_: Request, res: Response) => {
  res.sendStatus(403);
};

export default api;
