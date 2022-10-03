import express from "express";
import { query } from "express-validator";
import {
  createOutputFolderMiddleware,
  resizeImageMiddleware,
} from "../middleware";
import { api, resizeRoute } from "../routes";
import { resizeValidator } from "../utilities";

const router = express.Router();

router.get("/", api);
router.get(
  "/resize",
  query("filename").isAlpha(),
  query("width").isInt({ min: 1 }),
  query("height").isInt({ min: 1 }),
  resizeValidator,
  createOutputFolderMiddleware,
  resizeImageMiddleware,
  resizeRoute
);

export { router };
