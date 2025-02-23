import mongoose from "mongoose";

const characterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: String, required: true },
    height: { type: String, required: true },
    weight: { type: String, required: true },
    image: { type: String, required: true },
    information: { type: String, required: true },
    ownerid: { type: String, required: true },
  },
  { timestamps: true }
);

const Character = mongoose.model("Character", characterSchema);

export default Character;
