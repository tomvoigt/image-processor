import { NextFunction, Request, Response } from "express";
import { ValidationError, validationResult } from "express-validator";

export const resizeValidator = (
  req: Request,
  res: Response,
  next: NextFunction
): Response<unknown, Record<string, unknown>> | undefined => {
  const errorFormatter = ({ msg, param }: ValidationError) =>
    `Query parameter [${param}] has the following error: ${msg}`;

  const errors = validationResult(req).formatWith(errorFormatter);

  if (!errors.isEmpty()) {
    return res.status(400).send(errors.array());
  }

  next();
};
