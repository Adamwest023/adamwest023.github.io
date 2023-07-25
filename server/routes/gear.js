import express from "express";
import Gear from "../models/Gear.js";
import { createGear, deleteGear, updateGear, getGear, getAllGear } from "../controllers/gear.js";
import { createError } from "../utils/error.js";

const router = express.Router();

//CREATE
router.post("/", createGear);
//UPDATE
router.put("/:id", updateGear);
//DELETE
router.delete("/:id", deleteGear);
//GET
router.get("/:id", getGear);
//GETALL
router.get("/", getAllGear);
export default router