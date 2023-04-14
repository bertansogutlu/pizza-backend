const express = require("express");
const server = express();
server.use(express.json());
const { checkUserToken } = require("../utils/utils");

const authRouter = require("./auth/auth-router");
const ordersRouter = require("./orders/orders-router");
const pizzasRouter = require("./pizzas/pizzas-router");
const toppingRouter = require("./toppings/toppings-router");
const usershRouter = require("./users/users-router");

server.use("/api/auth", authRouter);
server.use("/api/orders", checkUserToken, ordersRouter);
server.use("/api/pizzas", checkUserToken, pizzasRouter);
server.use("/api/toppings", checkUserToken, toppingRouter);
server.use("/api/users", checkUserToken, usershRouter);

server.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Server error" });
});

module.exports = server;
