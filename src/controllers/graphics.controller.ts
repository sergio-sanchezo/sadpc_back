import { Request, Response } from "express";
import Graphic from "../models/graphics";

export const getGraphics = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const graphics = await Graphic.find();
    return res.status(200).json({ ok: true, data: graphics });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};

export const createGraphic = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const graphic = new Graphic(req.body);
  try {
    await graphic.save();
    return res.status(200).json({
      ok: true,
      data: graphic,
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};

export const updateGraphic = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const graphicId = req.body._id;
  try {
    const graphic = await Graphic.findByIdAndUpdate(graphicId, req.body);
    return res.status(200).json({ ok: true, data: graphic });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};

export const deleteGraphic = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const graphicId = req.body._id;
  try {
    const graphic = await Graphic.findByIdAndDelete(graphicId);
    return res.status(200).json({ ok: true, data: graphic });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};
