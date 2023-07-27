import express from "express";
import Gear from "../models/Gear.js";
import { createGear, deleteGear, updateGear, getGear, getAllGear } from "../controllers/gear.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createGear);
//UPDATE
router.put("/:id", verifyAdmin, updateGear);
//DELETE
router.delete("/:id", verifyAdmin, deleteGear);
//GET
router.get("/:id", getGear);
//GETALL
router.get("/", getAllGear);
export default router