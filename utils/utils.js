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
            res.status(401).json({ message: "token geçersizdir" });
          } else {
            req.decodedToken = decodedToken;
            next();
          }
        });
      } else {
        res.status(401).json({ message: "token gereklidir" });
      }
    } catch (error) {
      next(error);
    }
}

module.exports = {
    createUserToken,
    checkUserToken
}