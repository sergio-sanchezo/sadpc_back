/*

    MotherBoard Routes
    /api/motherboard

*/

import { Router } from "express";
import {
  createMotherBoard,
  deleteMotherBoard,
  getMotherBoards,
  updateMotherBoard,
} from "../controllers/motherboard.controller";

import passport from "passport";

const router = Router();

// router.use(passport.authenticate("jwt", { session: false }));

router.get("/", getMotherBoards);

router.post("/", createMotherBoard);

router.put("/", updateMotherBoard);

router.delete("/", deleteMotherBoard);

export default router;
