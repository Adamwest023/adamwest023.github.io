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
router.put("/:id", async (req, res) => {
    try {
        const updatedGear = await Gear.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true })
        res.status(200).json(updatedGear)
    } catch {
        res.status(500).json(err)
    }
});
//DELETE
router.delete("/:id", async (req, res) => {
    try {
        await Gear.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("Gear Deleted");
    } catch {
        res.status(500).json(err)
    }
});
//GET
router.get("/:id", async (req, res) => {
    try {
        const gear = await Gear.findById(
            req.params.id
        );
        res.status(200).json(gear)
    } catch {
        res.status(500).json(err)
    }
});
//GETALL
router.get("/", async (req, res) => {
    try {
        const gear = await Gear.find(
        );
        res.status(200).json(gear)
    } catch {
        res.status(500).json(err)
    }
});
export default router