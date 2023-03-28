var express = require('express');
var usersRouter = express.Router();
var { registerUser, getAllUser, loginUser } = require('../controllers/userControllers')
var { adminUser, protect } = require('../middlewares/authMiddleware')



usersRouter.post('/', registerUser)
usersRouter.post('/login', loginUser)
usersRouter.get('/', protect, getAllUser)


module.exports = usersRouter;
