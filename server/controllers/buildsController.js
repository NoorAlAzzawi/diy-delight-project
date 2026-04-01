import { pool } from "../config/database.js";

export async function getAllBuilds(req, res) {
  try {
    const result = await pool.query(
      "SELECT * FROM custom_items ORDER BY created_at DESC, id DESC"
    );
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function getBuildById(req, res) {
  try {
    const result = await pool.query(
      "SELECT * FROM custom_items WHERE id = $1",
      [req.params.id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Build not found." });
    }

    return res.status(200).json(result.rows[0]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function createBuild(req, res) {
  const {
    name,
    shell,
    core,
    power,
    storage,
    finish,
    price,
    validationError = "",
  } = req.body;

  if (
    !name ||
    !shell ||
    !core ||
    !power ||
    !storage ||
    !finish ||
    price == null
  ) {
    return res.status(400).json({ error: "All build fields are required." });
  }

  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  try {
    const result = await pool.query(
      `INSERT INTO custom_items
       (name, shell, core, power, storage, finish, price, validation_error)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [name, shell, core, power, storage, finish, price, ""]
    );

    return res.status(201).json(result.rows[0]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function updateBuild(req, res) {
  const {
    name,
    shell,
    core,
    power,
    storage,
    finish,
    price,
    validationError = "",
  } = req.body;

  if (
    !name ||
    !shell ||
    !core ||
    !power ||
    !storage ||
    !finish ||
    price == null
  ) {
    return res.status(400).json({ error: "All build fields are required." });
  }

  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  try {
    const result = await pool.query(
      `UPDATE custom_items
       SET name = $1,
           shell = $2,
           core = $3,
           power = $4,
           storage = $5,
           finish = $6,
           price = $7,
           validation_error = $8
       WHERE id = $9
       RETURNING *`,
      [name, shell, core, power, storage, finish, price, "", req.params.id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Build not found." });
    }

    return res.status(200).json(result.rows[0]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function deleteBuild(req, res) {
  try {
    const result = await pool.query(
      "DELETE FROM custom_items WHERE id = $1 RETURNING *",
      [req.params.id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Build not found." });
    }

    return res.status(200).json({ message: "Build deleted successfully." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
