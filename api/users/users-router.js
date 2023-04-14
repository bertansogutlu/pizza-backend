const router = require('express').Router();
const usersModel = require('./users-model');
const {checkRole} = require('../../utils/utils');

router.get('/',checkRole('admin'), async (req, res, next) => {
    try {
        const users = await usersModel.getAll()
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
  })

  router.get('/:id', async (req, res, next) => {
    try {
        const user = await usersModel.getById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
  })

  router.post('/', async (req, res, next) => {
    try {
        const user = await usersModel.create(req.body)
        res.status(201).json(user)
    } catch (error) {
        next(error)
    }
  })

  router.put('/:id', async (req, res, next) => {
    try {
        const user = await usersModel.updateById(req.params.id, req.body)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
  })

  router.delete('/:id', async (req, res, next) => {
    try {
        const users = await usersModel.deleteById(req.params.id)
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
  })

module.exports = router;