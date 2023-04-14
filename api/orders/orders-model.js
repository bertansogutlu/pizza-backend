const db = require("../../data/dbConfig");

async function getAll() {
  return await db("orders");
}

async function getById(id) {
  return await db("orders").where("order_id", id).leftJoin("pizzas","orders.pizza_id","pizzas.pizza_id").first();
}

async function create(order) {
  const [id] = await db("orders").insert(order);
  return getById(id);
}

async function updateById(id, order) {
  await db("orders").where("order_id", id).update(order);
  return getById(id);
}

async function deleteById(id) {
  return await db("orders").where("order_id", id).delete();
}

async function addToppingByPayload(payload) {
  return await db("order_toppings").insert(payload);
}

async function getToppingsByPayload(payload) {
  return await db("toppings").where(payload).select('topping').first()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  addToppingByPayload,
  getToppingsByPayload
};
