import express from "express";
import auth from "../middleware/auth.js";
import User from "../models/User.model.js";

const protectedRouter = express.Router();

protectedRouter.get("/protected", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user);
    if (!user) {
      return res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
    res.status(200).json({
      success: true,
      message: "Protected route accessed.",
      user: { id: user._id, username: user.username },
    });
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
});

export default protectedRouter;
