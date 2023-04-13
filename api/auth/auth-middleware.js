const usersModel = require("../users/users-model");

const validateRegisterPayload = async (req, res, next) => {
  try {
    if (!req.body.username) {
      res.status(400).json({ message: "Username is required" });
    } else if (!req.body.surname) {
      res.status(400).json({ message: "Surname is required" });
    } else if (!req.body.email) {
      res.status(400).json({ message: "Email is required" });
    } else if (!req.body.password) {
      res.status(400).json({ message: "Password is required" });
    } else {
        const emailIsExist = await usersModel.getByEmail(req.body.email)
        if(emailIsExist){
            res.status(400).json({emessage: `${req.body.email} has been already taken` });
        }else(
            next()
        )
    }
  } catch (error) {
    next(error);
  }
};

const validateLoginPayload = async (req, res, next) => {
  try {
    if (!req.body.email) {
      res.status(400).json({ message: "Email is required" });
    } else if (!req.body.password) {
      res.status(400).json({ message: "Password is required" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  validateRegisterPayload,
  validateLoginPayload,
};
