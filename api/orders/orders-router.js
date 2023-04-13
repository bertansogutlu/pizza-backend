const router = require('express').Router();
const ordersModel = require('./orders-model');

router.get('/', async (req, res, next) => {
    try {
        const orders = await ordersModel.getAll()
        res.status(200).json(orders)
    } catch (error) {
        next(error)
    }
  })

  router.get('/:id', async (req, res, next) => {
    try {
        const order = await ordersModel.getById(req.params.id)
        res.status(200).json(order)
    } catch (error) {
        next(error)
    }
  })

  router.post('/', async (req, res, next) => {
    try {
        const order = await ordersModel.create(req.body)
        res.status(201).json(order)
    } catch (error) {
        next(error)
    }
  })

  router.put('/:id', async (req, res, next) => {
    try {
        const order = await ordersModel.updateById(req.params.id, req.body)
        res.status(200).json(order)
    } catch (error) {
        next(error)
    }
  })

  router.delete('/:id', async (req, res, next) => {
    try {
        const order = await ordersModel.deleteById(req.params.id)
        res.status(200).json(order)
    } catch (error) {
        next(error)
    }
  })

module.exports = router;