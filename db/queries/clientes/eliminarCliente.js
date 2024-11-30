const pool = require('../../config');

const eliminarCliente = async (id) => {
    
  try {
    await pool.query('DELETE FROM pedidos WHERE cliente_id = $1;', [id]);
    const result = await pool.query('DELETE FROM clientes WHERE id = $1 RETURNING *;', [id]);
    return result.rows[0];
  } catch (error) {
    console.error('Error al eliminar cliente:', error.message);
    throw error;
  }
};

module.exports = eliminarCliente;
