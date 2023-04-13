const db = require("../../data/dbConfig");

async function getAll() {
  return await db("toppings");
}

async function getById(id) {
  return await db("toppings").where("topping_id", id).first();
}

async function create(order) {
  const [id] = await db("toppings").insert(order);
  return getById(id);
}

async function updateById(id, order) {
  await db("toppings").where("topping_id", id).update(order);
  return getById(id);
}

async function deleteById(id, order) {
  return await db("toppings").where("topping_id", id).delete();
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
