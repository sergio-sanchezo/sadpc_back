/*

    Display Routes
    /api/display

*/

import { Router } from "express";
import {
  createDisplay,
  deleteDisplay,
  getDisplays,
  updateDisplay,
} from "../controllers/display.controller";

import passport from "passport";

const router = Router();

// router.use(passport.authenticate("jwt", { session: false }));

router.get("/", getDisplays);

router.post("/", createDisplay);

router.put("/", updateDisplay);

router.delete("/", deleteDisplay);

export default router;
