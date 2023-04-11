const express = require('express');
const server = express();

const authRouter = require('./auth/auth-router');
const ordersRouter = require('./orders/orders-router');
const pizzasRouter = require('./pizzas/pizzas-router');
const toppingRouter = require('./toppings/toppings-router');
const usershRouter = require('./users/users-router');

server.use('/api/auth',authRouter);
server.use('/api/orders',ordersRouter);
server.use('/api/pizzas',pizzasRouter);
server.use('/api/toppings',toppingRouter);
server.use('/api/users',usershRouter);

module.exports = server;