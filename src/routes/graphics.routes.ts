/*

    Graphics Routes
    /api/graphics

*/

import { Router } from "express";
import {
  createGraphic,
  deleteGraphic,
  getGraphics,
  updateGraphic,
} from "../controllers/graphics.controller";

import passport from "passport";

const router = Router();

// router.use(passport.authenticate("jwt", { session: false }));

router.get("/", getGraphics);

router.post("/", createGraphic);

router.put("/", updateGraphic);

router.delete("/", deleteGraphic);

export default router;
