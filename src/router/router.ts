import express from "express";
import { createOutputFolder, resizeImage } from "../middleware";
import { api, resizeRoute } from "../routes";

const router = express.Router();

router.get("/", api);
router.get("/resize", createOutputFolder, resizeImage, resizeRoute);

export { router };
