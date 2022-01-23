import { model, Schema, Document } from "mongoose";

export interface IMemory extends Document {
  name: string;
  speed: string;
  modules: string;
  costPerGb: number;
  color: string;
  latencyWord: number;
  latencyCas: number;
  ratings: number;
  cost: number;
}

const memorySchema = new Schema({
  name: { type: String },
  speed: { type: String },
  modules: { type: String },
  costPerGb: { type: Number },
  color: { type: String },
  latencyWord: { type: Number },
  latencyCas: { type: Number },
  ratings: { type: Number },
  cost: { type: Number },
});

export default model<IMemory>("Memory", memorySchema);
