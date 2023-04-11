const router = require('express').Router();

router.get('/', (req, res, next) => {
    try {
        res.status(200).send('Get all')
    } catch (error) {
        next(error)
    }
  })

  router.get('/:id', (req, res, next) => {
    try {
        res.status(200).send('Get by id')
    } catch (error) {
        next(error)
    }
  })

  router.post('/', (req, res, next) => {
    try {
        res.status(201).send('Create')
    } catch (error) {
        next(error)
    }
  })

  router.put('/', (req, res, next) => {
    try {
        res.status(200).send('Update')
    } catch (error) {
        next(error)
    }
  })

  router.delete('/', (req, res, next) => {
    try {
        res.status(200).send('Delete')
    } catch (error) {
        next(error)
    }
  })

module.exports = router;