const {JWT_SECRET} = require('../config/config');
const JWT = require('jsonwebtoken');

const createUserToken = (payload,time)=>{
    return JWT.sign(payload,JWT_SECRET,{expiresIn: time})
}

const checkUserToken = (req, res, next) => {
    try {
      const token = req.headers["authorization"];
      if (token) {
        JWT.verify(token, JWT_SECRET, (err, decodedToken) => {
          if (err) {
            res.status(401).json({ message: "Token is invalid" });
          } else {
            req.decodedToken = decodedToken;
            next();
          }
        });
      } else {
        res.status(401).json({ message: "Token is required" });
      }
    } catch (error) {
      next(error);
    }
}

const checkRole = (role) => (req, res, next) => {
    try {
      const userRole = req.decodedToken.role;
      if (userRole) {
        if(userRole === role){
            next()
        }else{
            res.status(403).json({ message: "Forbidden" });
        }
      } else {
        res.status(401).json({ message: "Role is required" });
      }
    } catch (error) {
      next(error);
    }
}

module.exports = {
    createUserToken,
    checkUserToken,
    checkRole
}