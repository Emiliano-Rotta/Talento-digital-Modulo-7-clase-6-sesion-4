const pool = require("../../config");

const obtenerProductos = async () => {
    try {
      const result = await pool.query('SELECT * FROM productos;');
      return result.rows;
    } catch (error) {
      console.error('Error al obtener productos:', error.message);
      throw error;
    }
  };
  
  module.exports = obtenerProductos;
  