const UsersModel = require("../models/userModel")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const registerUser = async (req, res, next) => {
    const { name, email, password, isAdmin } = req.body;

    //Verification des information de l'utilisateur

    if (!name || !email || !password)
        return res.status(400).json({ message: "All fileds are required" })


    // verfication si l'utlisateur exste deja dans la base de données
    const isExist = await UsersModel.findOne({ email }).lean().exec()
    if (isExist)
        return res.status(400).json({ message: "user already exist...!" })

    // bcrypt password

    //const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, 10)

    //Create a user
    UsersModel.create({
        name,
        email,
        isAdmin,
        password: hashPassword

    })
        .then((user) => {
            res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                Token: generateToken(user._id)
            })
        }).catch((er) => console.log(er))


}

const loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    const user = await UsersModel.findOne({ email }).lean().exec();

    //compare user password and password if match
    if (user && (await bcrypt.compare(password, user.password))) {
        return res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            Token: generateToken(user._id)
        })

    } else {
        return res.status(404).json({
            message: "credential incorrect ... !"
        })
    }
}

//create an accesseur

const getAllUser = async (req, res) => {
    const user = {
        _id: req.user._id,
        email: req.user.email,
        name: req.user.name,
        isAdmin: req.user.isAdmin
    }
    res.status(200).json(user)
}


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

module.exports = {
    registerUser,
    loginUser,
    getAllUser,
}