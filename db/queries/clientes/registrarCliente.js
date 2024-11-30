const pool = require('../../config');

const registrarCliente = async (nombre, email) => {
    const query = 'INSERT INTO clientes (nombre, email) VALUES ($1, $2) RETURNING *;'
    const values = [nombre, email]
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
    
  } catch (error) {
    console.error('Error al registrar cliente:', error.message);
    throw error;
  }
};

module.exports = registrarCliente;
