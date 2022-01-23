import { model, Schema, Document } from "mongoose";

export interface IDisk extends Document {
  name: string;
  capacity: number;
  costPerGb: number;
  type: string;
  cache: number;
  shapeFactor: string;
  interface: string;
  ratings: number;
  cost: number;
}

const diskSchema = new Schema({
  name: { type: String },
  capacity: { type: Number },
  costPerGb: { type: Number },
  type: { type: String },
  cache: { type: Number },
  shapeFactor: { type: String },
  interface: { type: String },
  ratings: { type: Number },
  cost: { type: Number },
});

export default model<IDisk>("Disk", diskSchema);
