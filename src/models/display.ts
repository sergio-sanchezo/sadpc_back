import { model, Schema, Document } from "mongoose";

export interface IDisplay extends Document {
  name: string;
  size: number;
  resolution: string;
  refreshTime: number;
  responseTime: number;
  panelType: string;
  aspectRatio: string;
  ratings: number;
  cost: number;
}

const displaySchema = new Schema({
  name: { type: String },
  size: { type: Number },
  resolution: { type: String },
  refreshTime: { type: Number },
  responseTime: { type: Number },
  panelType: { type: String },
  aspectRatio: { type: String },
  ratings: { type: Number },
  cost: { type: Number },
});

export default model<IDisplay>("Display", displaySchema);
