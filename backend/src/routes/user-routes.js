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

const router = express.Router();

/* ================= AUTHENTICATED USER ================= */

router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);

/* ================= ADMIN CRUD ================= */

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;