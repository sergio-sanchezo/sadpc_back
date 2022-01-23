import { model, Schema, Document } from "mongoose";

export interface IMotherBoard extends Document {
  name: string;
  socket: string;
  shapeFactor: string;
  maxMemory: number;
  slots: number;
  color: string;
  ratings: number;
  cost: number;
}

const motherBoardSchema = new Schema({
  name: { type: String },
  socket: { type: String },
  shapeFactor: { type: String },
  maxMemory: { type: Number },
  slots: { type: Number },
  color: { type: String },
  ratings: { type: Number },
  cost: { type: Number },
});

export default model<IMotherBoard>("MotherBoard", motherBoardSchema);
