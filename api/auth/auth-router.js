const router = require('express').Router();

router.post('/register', (req, res, next) => {
  try {
      res.status(200).send('Register')
  } catch (error) {
      next(error)
  }
})

router.post('/login', (req, res, next) => {
  try {
      res.status(200).send('Login')
  } catch (error) {
      next(error)
  }
})

router.post('/password', (req, res, next) => {
  try {
      res.status(200).send('Password')
  } catch (error) {
      next(error)
  }
})

module.exports = router;