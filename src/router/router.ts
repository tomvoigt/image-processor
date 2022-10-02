import express from "express";
import {
  createOutputFolderMiddleware,
  resizeImageMiddleware,
} from "../middleware";
import { api, resizeRoute } from "../routes";

const router = express.Router();

router.get("/", api);
router.get(
  "/resize",
  createOutputFolderMiddleware,
  resizeImageMiddleware,
  resizeRoute
);

export { router };
