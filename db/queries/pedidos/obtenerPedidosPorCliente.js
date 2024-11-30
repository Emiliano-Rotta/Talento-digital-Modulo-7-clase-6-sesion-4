const pool = require('../../config');

const obtenerPedidosPorCliente = async (clienteId) => {
  try {
    const result = await pool.query(
        //usamos comillas invertidas para poder hacer enter y que el codigo sea mas legible
      `SELECT pedidos.id, productos.nombre AS producto, productos.precio, pedidos.cantidad
       FROM pedidos
       INNER JOIN productos ON pedidos.producto_id = productos.id
       WHERE pedidos.cliente_id = $1;`,
      [clienteId]
    );
    return result.rows;
  } catch (error) {
    console.error('Error al obtener pedidos del cliente:', error.message);
    throw error;
  }
};

module.exports = obtenerPedidosPorCliente;
