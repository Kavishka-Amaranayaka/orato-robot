console.log("User routes file loaded");

import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getProfile,
  updateProfile
} from "../controllers/user-controller.js";
import upload from "../middleware/upload.js";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

router.put("/test-profile", (req, res) => {
  res.json({ message: "Test route works" });
});

/* ================= AUTHENTICATED USER ================= */

router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);

router.post(
  "/upload-profile-picture",
  protect,
  upload.single("image"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const stream = cloudinary.uploader.upload_stream(
        { folder: "profile_pictures" },
        async (error, result) => {
          if (error) {
            return res.status(500).json({ message: error.message });
          }

          // use middleware user directly
          const user = req.user;
          user.profilePicture = result.secure_url;
          await user.save();

          res.status(200).json({
            success: true,
            message: "Profile picture updated",
            user,
          });
        }
      );

      stream.end(req.file.buffer);

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

/* ================= ADMIN CRUD ================= */
/* Keep parameter routes ALWAYS at bottom */

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;