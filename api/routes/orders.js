const router = require('express').Router();
const { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('../middleware/verifyToken.js');
const { 
    createOrder,
    updateOrder,
    deleteOrder,
    getUserOrder,
    getAllOrders,
    getMonthlyIncome
} = require("../controllers/order.js");

router.post("/", verifyToken, createOrder);
router.put("/:id", verifyTokenAndAdmin, updateOrder);
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);
router.get("/find/:userId", verifyTokenAndAuthorization, getUserOrder);
router.get("/", verifyTokenAndAdmin, getAllOrders);
router.get("/income", verifyTokenAndAdmin, getMonthlyIncome);


module.exports = router;