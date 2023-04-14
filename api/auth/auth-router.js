const router = require('express').Router();
const userModel = require('../users/users-model');
const authMiddleware = require('./auth-middleware');
const bcryptjs = require("bcryptjs");
const utils = require('../../utils/utils');


router.post('/register', authMiddleware.validateRegisterPayload, async (req, res, next) => {
    try {
        req.body.password = bcryptjs.hashSync(req.body.password,8)
        const newUser = await userModel.create(req.body)
        res.status(200).json(newUser)
    } catch (error) {
        next(error)
    }
  })

router.post('/login', authMiddleware.validateLoginPayload, async (req, res, next) => {
  try {
    const user = await userModel.getByEmail(req.body.email)
    const validPassword = bcryptjs.compareSync(req.body.password, user.password);
    const userPayload = {
      user_id: user.user_id,
      username: user.username,
      surname: user.surname,
      email: user.email,
      role: user.role
    }
    if(validPassword){
      const token = utils.createUserToken(userPayload,'8h')
      res.status(200).json({message: `Welcome, ${req.body.username}`, token: token})
    }
    else{
      res.status(400).json({message: "User not found"})
    }
  } catch (error) {
      next(error)
  }
})

module.exports = router;