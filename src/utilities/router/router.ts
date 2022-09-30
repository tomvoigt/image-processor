import express from "express";
import { api } from "../../routes";

const router = express.Router();

router.get("/", api);

export { router };
