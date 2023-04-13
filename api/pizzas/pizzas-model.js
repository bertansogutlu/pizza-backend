const db = require("../../data/dbConfig");

async function getAll() {
  return await db("pizzas")
  .leftJoin("ratings","ratings.pizza_id","pizzas.pizza_id");
}

async function getById(id) {
  return await db("pizzas").where("pizza_id", id).first();
}

async function create(order) {
  const [id] = await db("pizzas").insert(order);
  return getById(id);
}

async function updateById(id, order) {
  await db("pizzas").where("pizza_id", id).update(order);
  return getById(id);
}

async function deleteById(id) {
  return await db("pizzas").where("pizza_id", id).delete();
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
