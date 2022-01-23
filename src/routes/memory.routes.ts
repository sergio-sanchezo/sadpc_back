/*

    Memory Routes
    /api/memory

*/

import { Router } from "express";
import {
  createMemory,
  deleteMemory,
  getMemories,
  updateMemory,
} from "../controllers/memory.controller";

import passport from "passport";

const router = Router();

// router.use(passport.authenticate("jwt", { session: false }));

router.get("/", getMemories);

router.post("/", createMemory);

router.put("/", updateMemory);

router.delete("/", deleteMemory);

export default router;
