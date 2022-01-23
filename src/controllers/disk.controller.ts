import { Request, Response } from "express";
import Disk from "../models/disk";

export const getDisks = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const disks = await Disk.find();
    return res.status(200).json({ ok: true, data: disks });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};

export const createDisk = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const disk = new Disk(req.body);
  try {
    await disk.save();
    return res.status(200).json({
      ok: true,
      data: disk,
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};

export const updateDisk = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const diskId = req.body._id;
  try {
    const disk = await Disk.findByIdAndUpdate(diskId, req.body);
    return res.status(200).json({ ok: true, data: disk });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};

export const deleteDisk = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const diskId = req.body._id;
  try {
    const disk = await Disk.findByIdAndDelete(diskId);
    return res.status(200).json({ ok: true, data: disk });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};
