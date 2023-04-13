const router = require('express').Router();
const toppingsModel = require('./toppings-model');

router.get('/', async (req, res, next) => {
    try {
        const toppings = await toppingsModel.getAll()
        res.status(200).json(toppings)
    } catch (error) {
        next(error)
    }
  })

  router.get('/:id', async (req, res, next) => {
    try {
        const topping = await toppingsModel.getById(req.params.id)
        res.status(200).json(topping)
    } catch (error) {
        next(error)
    }
  })

  router.post('/', async (req, res, next) => {
    try {
        const topping = await toppingsModel.create(req.body)
        res.status(201).json(topping)
    } catch (error) {
        next(error)
    }
  })

  router.put('/:id', async (req, res, next) => {
    try {
        const topping = await toppingsModel.updateById(req.params.id, req.body)
        res.status(200).json(topping)
    } catch (error) {
        next(error)
    }
  })

  router.delete('/:id', async (req, res, next) => {
    try {
        const topping = await toppingsModel.deleteById(req.params.id)
        res.status(200).json(topping)
    } catch (error) {
        next(error)
    }
  })

module.exports = router;