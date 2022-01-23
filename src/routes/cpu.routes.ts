/*

    CPU Routes
    /api/cpu

*/

import { Router } from "express";
import {
  createCpu,
  deleteCpu,
  getCpus,
  updateCpu,
} from "../controllers/cpu.controller";

import passport from "passport";

const router = Router();

// router.use(passport.authenticate("jwt", { session: false }));

router.get("/", getCpus);

router.post("/", createCpu);

router.put("/", updateCpu);

router.delete("/", deleteCpu);

export default router;
