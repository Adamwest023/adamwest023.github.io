import express from "express";
import Gear from "../models/Gear.js";

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {

    const newGear = new Gear(req.body) 
    try {
        const savedGear = await newGear.save()
        res.status(200).json(savedGear)
    } catch {
        res.status(500).json(err)
    }
});
//UPDATE
//DELETE
//GET
//GETALL
export default router