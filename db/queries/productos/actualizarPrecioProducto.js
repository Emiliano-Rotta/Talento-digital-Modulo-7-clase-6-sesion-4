const pool = require('../../config') 


const actualizarPrecioProducto = async (id, nuevoPrecio) => {
    const query = 'UPDATE productos SET precio = $1 WHERE id = $2 RETURNING *;'
    const values = [nuevoPrecio, id]

    try {
    const result = await pool.query(query, values)
    return result.rows[0];
  } catch (error) {
    console.error('Error al actualizar precio del producto:', error.message);

  }
};

module.exports = actualizarPrecioProducto;
