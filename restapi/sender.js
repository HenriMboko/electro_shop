const userModel = require("./models/userModel");
const productModel = require("./models/productModel")
const orderModel = require("./models/orderModels");
const connectDb = require("./config/data")
const users = require("./data/users")
const Products = require("./data/products");

require("dotenv").config()

connectDb();


const importData = async () => {
    try {
        await orderModel.deleteMany();
        await productModel.deleteMany();
        await userModel.deleteMany();


        const creatUser = await userModel.insertMany(users)
        const adminUser = creatUser[0]._id


        const simplProduct = Products.map(product => {
            return { ...product, user: adminUser }
        })


        await productModel.insertMany(simplProduct);

        console.log("Data Imported...!");
        process.exit()
    } catch (error) {
        console.error(error)
        process.exit()
    }
}


const detroyData = async () => {
    try {
        await orderModel.deleteMany();
        await productModel.deleteMany();
        await userModel.deleteMany();

        console.log("Data Destroyed...!");
        process.exit()
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}


if (process.argv[2] === '-d') {
    detroyData()
} else {
    importData()
}