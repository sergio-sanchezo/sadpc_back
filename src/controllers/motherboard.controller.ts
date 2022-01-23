import { Request, Response } from "express";
import MotherBoard from "../models/motherboard";

export const getMotherBoards = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const motherBoards = await MotherBoard.find();
    return res.status(200).json({ ok: true, data: motherBoards });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};

export const createMotherBoard = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const motherBoard = new MotherBoard(req.body);
  try {
    await motherBoard.save();
    return res.status(200).json({
      ok: true,
      data: motherBoard,
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};

export const updateMotherBoard = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const motherBoardId = req.body._id;
  try {
    const motherBoard = await MotherBoard.findByIdAndUpdate(
      motherBoardId,
      req.body
    );
    return res.status(200).json({ ok: true, data: motherBoard });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};

export const deleteMotherBoard = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const motherBoardId = req.body._id;
  try {
    const motherBoard = await MotherBoard.findByIdAndDelete(motherBoardId);
    return res.status(200).json({ ok: true, data: motherBoard });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Contact an admin" });
  }
};
