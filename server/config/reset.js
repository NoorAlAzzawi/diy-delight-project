import { pool } from "./database.js";

const dropTableQuery = `
  DROP TABLE IF EXISTS custom_items;
`;

const createTableQuery = `
  CREATE TABLE custom_items (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    shell TEXT NOT NULL,
    core TEXT NOT NULL,
    power TEXT NOT NULL,
    storage TEXT NOT NULL,
    finish TEXT NOT NULL,
    price INTEGER NOT NULL,
    validation_error TEXT DEFAULT '',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

const seedDataQuery = `
  INSERT INTO custom_items 
  (name, shell, core, power, storage, finish, price)
  VALUES
  ('Starter Build', 'Nova Shell', 'Quantum X', 'Balanced', '512 GB SSD', 'Matte Black', 999),
  ('Gaming Beast', 'Titan Shell', 'HyperCore Z', 'Performance', '2 TB SSD', 'Glossy White', 1999),
  ('Workstation Pro', 'Carbon Shell', 'Neural Pro', 'Eco', '1 TB SSD', 'Carbon Fiber', 1499),
  ('Ultra Light', 'Aero Shell', 'LiteCore', 'Balanced', '256 GB SSD', 'Silver', 799),
  ('Max Power', 'Titan Shell', 'Quantum X', 'Performance', '4 TB SSD', 'Matte Black', 2499);
`;

async function resetDatabase() {
  try {
    await pool.query(dropTableQuery);
    await pool.query(createTableQuery);
    await pool.query(seedDataQuery);

    console.log("✅ Database reset + seeded with 5 items!");
  } catch (error) {
    console.error("❌ Failed to reset database:", error.message);
  } finally {
    await pool.end();
  }
}

resetDatabase();
