const router = require('express').Router();
const { verifyTokenAndAdmin } = require('../middleware/verifyToken.js');
const { 
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getAllProducts
} = require('../controllers/product.js');


router.post("/", verifyTokenAndAdmin, createProduct);
router.put("/:id", verifyTokenAndAdmin, updateProduct);
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);
router.get("/find/:id" , getProduct);
router.get("/" , getAllProducts);



module.exports = router;