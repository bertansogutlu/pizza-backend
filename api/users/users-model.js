const db = require("../../data/dbConfig");

async function getAll() {
  return await db("users");
}

async function getById(id) {
  return await db("users").where("user_id", id).first();
}

async function create(order) {
  const [id] = await db("users").insert(order);
  return getById(id);
}

async function updateById(id, order) {
  await db("users").where("user_id", id).update(order);
  return getById(id);
}

async function deleteById(id) {
  return await db("users").where("user_id", id).delete();
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
