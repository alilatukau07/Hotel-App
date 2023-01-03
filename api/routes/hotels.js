import express from "express";

import {
  createHotel,
  deleteHotel,
  getallHotel,
  getHotel,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Router yang mengambil fungsi dari controllers
router.post("/", verifyAdmin, createHotel);
router.put("/:id", verifyAdmin, updateHotel);
router.delete("/:id", verifyAdmin, deleteHotel);
router.get("/:id", getHotel);
router.get("/", getallHotel);

export default router;
