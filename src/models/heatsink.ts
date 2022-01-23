import { model, Schema, Document } from "mongoose";

export interface IHeatSink extends Document {
  name: string;
  rpm: string;
  noise: string;
  color: string;
  size: number;
  ratings: number;
  cost: number;
}

const heatSinkSchema = new Schema({
  name: { type: String },
  rpm: { type: String },
  noise: { type: String },
  color: { type: String },
  size: { type: Number },
  ratings: { type: Number },
  cost: { type: Number },
});

export default model<IHeatSink>("Heatsink", heatSinkSchema);
