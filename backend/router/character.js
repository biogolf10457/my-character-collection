import express from "express";
import Character from "../models/Character.model.js";

const characterRouter = express.Router();

characterRouter.post("/createcharacter", async (req, res) => {
  const { name, gender, age, height, weight, image, information, ownerid } =
    req.body;

  try {
    const newCharacter = new Character({
      name,
      gender,
      age,
      height,
      weight,
      image,
      information,
      ownerid,
    });
    await newCharacter.save();
    res
      .status(201)
      .json({ success: true, message: "Character created successfully." });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
});

characterRouter.get("/charactercollection/:userid", async (req, res) => {
  const { userid } = req.params;
  try {
    const characters = await Character.find({ ownerid: userid });
    const charactersByNameAndId = characters.map((character) => ({
      name: character.name,
      id: character._id,
      image: character.image,
    }));
    res.status(200).json({ success: true, data: charactersByNameAndId });
  } catch (error) {
    console.log("Error fetching characters:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

export default characterRouter;
