const express = require("express");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middleware/verifyToken.js');
const {     
    updateUser,
    deleteUser,
    getUser,
    getAllUsers,
    getUserStats 
} = require("../controllers/user.js");

const router = express.Router();

router.put("/:id", verifyTokenAndAuthorization, updateUser);
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);
router.get("/find/:id", verifyTokenAndAdmin, getUser);
router.get("/", verifyTokenAndAdmin, getAllUsers);
router.get("/stats", verifyTokenAndAdmin, getUserStats);


module.exports = router;