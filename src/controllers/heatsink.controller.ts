import { Request, Response } from "express";
import HeatSink from "../models/heatsink";

export const getHeatSinks = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const heatSinks = await HeatSink.find();
    return res.status(200).json({ ok: true, data: heatSinks });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};

export const createHeatSink = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const heatSink = new HeatSink(req.body);
  try {
    await heatSink.save();
    return res.status(200).json({
      ok: true,
      data: heatSink,
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};

export const updateHeatSink = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const heatSinkId = req.body._id;
  try {
    const heatSink = await HeatSink.findByIdAndUpdate(heatSinkId, req.body);
    return res.status(200).json({ ok: true, data: heatSink });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};

export const deleteHeatSink = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const heatSinkId = req.body._id;
  try {
    const heatSink = await HeatSink.findByIdAndDelete(heatSinkId);
    return res.status(200).json({ ok: true, data: heatSink });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};
