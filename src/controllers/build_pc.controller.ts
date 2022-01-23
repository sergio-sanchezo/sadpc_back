import { Request, Response } from "express";
import cpu from "../models/cpu";
import disk from "../models/disk";
import display from "../models/display";
import graphics from "../models/graphics";
import heatsink from "../models/heatsink";
import memory from "../models/memory";
import motherboard from "../models/motherboard";

export const getAllModels = async (req: Request, res: Response) => {
  try {
    const allCpus = await cpu.find();
    const allDisks = await disk.find();
    const allDisplays = await display.find();
    const allGraphics = await graphics.find();
    const allHeatSinks = await heatsink.find();
    const allMemories = await memory.find();
    const allMotherBoards = await motherboard.find();
    return res
      .status(200)
      .json({
        ok: true,
        data: {
          cpu: allCpus,
          disk: allDisks,
          display: allDisplays,
          graphics: allGraphics,
          heatsink: allHeatSinks,
          memory: allMemories,
          motherboard: allMotherBoards,
        },
      });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};
