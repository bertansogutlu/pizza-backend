/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('order_toppings').truncate()
  await knex('orders').truncate()
  await knex('toppings').truncate()
  await knex('ratings').truncate()
  await knex('pizzas').truncate()
  await knex('users').truncate()
  await knex('roles').truncate()

  await knex('roles').insert([
    {role_id: 1, name: 'admin'},
    {role_id: 2, name: 'user'},
  ]);
  await knex('users').insert([
    {name: "Defne", surname: 'Atik', password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', role_id: 2},
    {name: "Bertan", surname: 'Sogutlu', password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', role_id: 1},
  ]);
  await knex('pizzas').insert([
    {name: 'Pepperoni', description: 'Hot', price: '150'},
    {name: 'Fungi', description: 'Soft', price: '120'},
  ]);
  await knex('ratings').insert([
    {rate: 5, user_id: 1, pizza_id: 2},
    {rate: 4, user_id: 2, pizza_id: 1},
  ]);
  await knex('toppings').insert([
    {name: 'Pepperoni'},
    {name: 'Sausage'},
    {name: 'Mushrooms'},
    {name: 'Chicken'},
    {name: 'Onions'},
    {name: 'Peppers'},
  ]);
  await knex('orders').insert([
    {dough: 'thick', size: 'small', quantity: 1, note: 'Extra hot', status: 'Preparing', price: '150', pizza_id: 1, created_at: '2023-4-12 10:10:10', updated_at:'2023-4-12 10:10:15'},
    {dough: 'thick', size: 'small', quantity: 1, note: 'Extra sauce', status: 'Preparing', price: '120', pizza_id: 2, created_at: '2023-4-12 12:10:10', updated_at:'2023-4-12 12:10:15'},
  ]);
  await knex('order_toppings').insert([
    {topping_id: '1'},
    {topping_id: '2'},
  ]);

};
