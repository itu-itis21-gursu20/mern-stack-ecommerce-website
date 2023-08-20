const router = require('express').Router();
const { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('../middleware/verifyToken.js');
const { 
    createCart,
    updateCart,
    deleteCart,
    getUserCart,
    getAllCarts
} = require("../controllers/cart.js");

router.post("/", verifyToken, createCart);
router.put("/:id", verifyTokenAndAuthorization, updateCart);
router.delete("/:id", verifyTokenAndAuthorization, deleteCart);
router.get("/find/:userId", verifyTokenAndAuthorization, getUserCart);
router.get("/", verifyTokenAndAdmin, getAllCarts);


module.exports = router;