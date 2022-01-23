/*

    Disk Routes
    /api/disk

*/

import { Router } from "express";
import {
  createDisk,
  deleteDisk,
  getDisks,
  updateDisk,
} from "../controllers/disk.controller";

import passport from "passport";

const router = Router();

// router.use(passport.authenticate("jwt", { session: false }));

router.get("/", getDisks);

router.post("/", createDisk);

router.put("/", updateDisk);

router.delete("/", deleteDisk);

export default router;
