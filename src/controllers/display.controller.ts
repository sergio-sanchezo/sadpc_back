import { Request, Response } from "express";
import Display from "../models/display";

export const getDisplays = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const displays = await Display.find();
    return res.status(200).json({ ok: true, data: displays });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};

export const createDisplay = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const display = new Display(req.body);
  try {
    await display.save();
    return res.status(200).json({
      ok: true,
      data: display,
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};

export const updateDisplay = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const displayId = req.body._id;
  try {
    const display = await Display.findByIdAndUpdate(displayId, req.body);
    return res.status(200).json({ ok: true, data: display });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};

export const deleteDisplay = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const displayId = req.body._id;
  try {
    const display = await Display.findByIdAndDelete(displayId);
    return res.status(200).json({ ok: true, data: display });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};
