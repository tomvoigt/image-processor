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
  query("width").isInt({ min: 0 }),
  query("height").isInt({ min: 0 }),
  resizeValidator,
  createOutputFolderMiddleware,
  resizeImageMiddleware,
  resizeRoute
);

export { router };
