import { Request, Response } from "express";
import CPU from "../models/cpu";

export const getCpus = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const cpus = await CPU.find();
    return res.status(200).json({ ok: true, data: cpus });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};

export const createCpu = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const cpu = new CPU(req.body);
  try {
    await cpu.save();
    return res.status(200).json({
      ok: true,
      data: cpu,
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};

export const updateCpu = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const cpuId = req.body._id;
  console.log(req.body);
  try {
    const cpu = await CPU.findByIdAndUpdate(cpuId, req.body);
    return res.status(200).json({ ok: true, data: cpu });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};

export const deleteCpu = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const cpuId = req.body._id;
  try {
    const cpu = await CPU.findByIdAndDelete(cpuId);
    return res.status(200).json({ ok: true, data: cpu });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};
