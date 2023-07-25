import Gear from "../models/Gear.js"

export const createGear = async (req, res, next) => {
    const newGear = new Gear(req.body)

    try {
        const savedGear = await newGear.save()
        res.status(200).json(savedGear)
    } catch {
        next(err);
    }
};

export const updateGear = async (req, res, next) => {
    try {
        const updatedGear = await Gear.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true })
        res.status(200).json(updatedGear)
    } catch {
        next(err);
    }
};

export const deleteGear = async (req, res, next) => {
    try {
        await Gear.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("Gear Deleted");
    } catch {
        next(err);
    }
};

export const getGear = async (req, res, next) => {
    try {
        const gear = await Gear.findById(
            req.params.id
        );
        res.status(200).json(gear)
    } catch {
        next(err);
    }
};

export const getAllGear = async (req, res, next) => {
    try {
        const gear = await Gear.find();
        res.status(200).json(gear)
    } catch (err) {
        next(err);
    }
};