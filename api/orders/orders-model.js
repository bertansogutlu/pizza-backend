const db = require("../../data/dbConfig");

async function getAll() {
  return await db("orders");
}

async function getById(id) {
  return await db("orders").where("order_id", id).first();
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

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
