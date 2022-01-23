import { model, Schema, Document } from "mongoose";

export interface ICPU extends Document {
  name: string;
  cores: number;
  basicFrequency: number;
  maxFrequency: number;
  power: number;
  integratedGraphics: string;
  multiThreading: boolean;
  ratings: number;
  cost: number;
}

const cpuSchema = new Schema({
  name: { type: String },
  cores: { type: Number },
  basicFrequency: { type: Number },
  maxFrequency: { type: Number },
  power: { type: Number },
  integratedGraphics: { type: String },
  multiThreading: { type: Boolean },
  ratings: { type: Number },
  cost: { type: Number },
});

export default model<ICPU>("CPU", cpuSchema);
