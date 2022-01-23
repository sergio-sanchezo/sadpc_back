import { Request, Response } from "express";
import Memory from "../models/memory";

export const getMemories = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const memories = await Memory.find();
    return res.status(200).json({ ok: true, data: memories });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};

export const createMemory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const memory = new Memory(req.body);
  try {
    await memory.save();
    return res.status(200).json({
      ok: true,
      data: memory,
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};

export const updateMemory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const memoryId = req.body._id;
  try {
    const memory = await Memory.findByIdAndUpdate(memoryId, req.body);
    return res.status(200).json({ ok: true, data: memory });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};

export const deleteMemory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const memoryId = req.body._id;
  try {
    const memory = await Memory.findByIdAndDelete(memoryId);
    return res.status(200).json({ ok: true, data: memory });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};
