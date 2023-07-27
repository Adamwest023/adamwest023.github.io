import express from "express";
import { updateUser,deleteUser,getUser,getAllUser } from "../controllers/user.js";
import { verifyToken,verifyUser,verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//authentication
// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//     res.send("hello user, you are logged in")
// });
// //change with authentication
// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//     res.send("hello user, you are logged in")
// });
// //Admin check
// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//     res.send("Hello admin, you are logged in and you can delete accounts")
// });

//UPDATE
router.put("/:id",verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyUser,deleteUser);
//GET
router.get("/:id",verifyUser, getUser);
//GETALL
router.get("/", verifyAdmin,getAllUser)
;
export default router 