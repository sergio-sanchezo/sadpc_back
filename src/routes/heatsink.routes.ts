/*

    HeatSink Routes
    /api/heatsink

*/

import { Router } from "express";
import {
  createHeatSink,
  deleteHeatSink,
  getHeatSinks,
  updateHeatSink,
} from "../controllers/heatsink.controller";

import passport from "passport";

const router = Router();

// router.use(passport.authenticate("jwt", { session: false }));

router.get("/", getHeatSinks);

router.post("/", createHeatSink);

router.put("/", updateHeatSink);

router.delete("/", deleteHeatSink);

export default router;
