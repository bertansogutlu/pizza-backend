const router = require('express').Router();
const ordersModel = require('./orders-model');
const {checkRole} = require('../../utils/utils');

router.get('/',checkRole('admin'), async (req, res, next) => {
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
        const orderToppings = req.body.order_toppings
        delete req.body.order_toppings
        let order = await ordersModel.create(req.body)
        const orderToppingsPayload =  orderToppings.map(topping => ({order_id: order.order_id, topping_id: topping}));
        await ordersModel.addToppingByPayload(orderToppingsPayload)
        const toppingsList = []
        orderToppings.forEach( async topping => {
            let toppingObj = await ordersModel.getToppingsByPayload({"topping_id":topping})
            toppingsList.push(toppingObj.topping)
        });
        setTimeout(() => {
            const orderModel = {dough: order.dough, size: order.size, quantity: order.quantity, note:order.note, status: order.status, price: order.price, pizza: order.pizza, description: order.description, toppings:toppingsList}
            res.status(200).json(orderModel)
          }, "10");
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