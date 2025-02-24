import mongoose from "mongoose";

const characterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, required: false },
    age: { type: String, required: false },
    height: { type: String, required: false },
    weight: { type: String, required: false },
    image: { type: String, required: false },
    information: { type: String, required: false },
    ownerid: { type: String, required: true },
  },
  { timestamps: true }
);

const Character = mongoose.model("Character", characterSchema);

export default Character;
