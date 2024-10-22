import { Schema, model } from "mongoose";

const DataSchema = new Schema({
  intensity: Number,
  likelihood: Number,
  relevance: Number,
  year: Number,
  country: String,
  topics: String,
  region: String,
  city: String,
  sector: String,
  pest: String,
  swot: String,
  source: String,
});

export default model("Data", DataSchema);
