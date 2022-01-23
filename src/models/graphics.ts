import { model, Schema, Document } from "mongoose";

export interface IGraphics extends Document {
  name: string;
  chipSet: string;
  memory: number;
  basicFrequency: number;
  maxFrequency: number;
  color: string;
  length: number;
  ratings: number;
  cost: number;
}

const graphicsSchema = new Schema({
  name: { type: String },
  chipSet: { type: String },
  memory: { type: Number },
  basicFrequency: { type: Number },
  maxFrequency: { type: Number },
  color: { type: String },
  length: { type: Number },
  ratings: { type: Number },
  cost: { type: Number },
});

export default model<IGraphics>("Graphics", graphicsSchema);
