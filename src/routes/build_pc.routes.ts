/*

    ALL data Routes
    /api/build_pc

*/

import { Router } from "express";
import { getAllModels } from "../controllers/build_pc.controller";

import passport from "passport";

const router = Router();

// router.use(passport.authenticate("jwt", { session: false }));

router.get("/", getAllModels);

export default router;
