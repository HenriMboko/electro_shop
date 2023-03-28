const productModel = require('../models/productModel')

//Get Method Get/
//Route /api/products
//access public

const getProducts = async (req, res, next) => {
    const products = await productModel.find({});
    res.status(200).json(products)
}


//Get Method Get/:id
//Route /api/products/:id
//access public

const getProductsById = async (req, res, next) => {
    const prod = await productModel.findById(req.params.id).exec()

    res.status(200).json(prod)
}


const productsController = {
    getProducts,
    getProductsById
}

module.exports = productsController;