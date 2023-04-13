const router = require('express').Router();
const pizzasModel = require('./pizzas-model');

router.get('/', async (req, res, next) => {
    try {
        const pizzas = await pizzasModel.getAll()
        res.status(200).json(pizzas)
    } catch (error) {
        next(error)
    }
  })

  router.get('/:id', async (req, res, next) => {
    try {
        const pizza = await pizzasModel.getById(req.params.id)
        res.status(200).json(pizza)
    } catch (error) {
        next(error)
    }
  })

  router.post('/', async (req, res, next) => {
    try {
        const pizza = await pizzasModel.create(req.body)
        res.status(201).json(pizza)
    } catch (error) {
        next(error)
    }
  })

  router.put('/:id', async (req, res, next) => {
    try {
        const pizza = await pizzasModel.updateById(req.params.id, req.body)
        res.status(200).json(pizza)
    } catch (error) {
        next(error)
    }
  })

  router.delete('/:id', async (req, res, next) => {
    try {
        const pizza = await pizzasModel.deleteById(req.params.id)
        res.status(200).json(pizza)
    } catch (error) {
        next(error)
    }
  })

module.exports = router;