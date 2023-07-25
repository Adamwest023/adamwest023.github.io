import User from "../models/User.js"
 
export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true })
        res.status(200).json(updatedUser)
    } catch {
        next(err);
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        await user.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("User Deleted");
    } catch {
        next(err);
    }
};

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(
            req.params.id
        );
        res.status(200).json(user)
    } catch {
        next(err);
    }
};

export const getAllUser = async (req, res, next) => {
    try {
        const user = await User.find();
        res.status(200).json(user)
    } catch (err) {
        next(err);
    }
};