const express = require('express')
const productRouter = express.Router();
const { getProducts, getProductsById } = require('../controllers/productControllers')

productRouter.get('/', getProducts);
productRouter.get('/:id', getProductsById);




module.exports = productRouter