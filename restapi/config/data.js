const mongoose = require("mongoose");

mongoose.set('strictQuery', 'true')


const connectDb = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URL)
        console.log("connection with database succesfull")
    } catch (error) {
        console.error(error)
    }
}


module.exports = connectDb