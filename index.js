const obtenerProductos = require('./db/queries/productos/obtenerProductos')
const actualizarPrecioProducto = require('./db/queries/productos/actualizarPrecioProducto');
const registrarCliente = require('./db/queries/clientes/registrarCliente');
const eliminarCliente = require('./db/queries/clientes/eliminarCliente');
const obtenerPedidosPorCliente = require('./db/queries/pedidos/obtenerPedidosPorCliente');


const main = async () => {
    try {
    //   // 1. Obtener todos los productos 
    //   const productos = await obtenerProductos();
    //   console.log('Productos disponibles:', productos);
  
      // 2. Registrar un cliente
    //   const nuevoCliente = await registrarCliente('Helmo Torres', 'Helmo@example.com');
    //   console.log('Cliente registrado:', nuevoCliente);
  
      // 3. Actualizar el precio de un producto
    //   const productoActualizado = await actualizarPrecioProducto(1, 1800);
    //   console.log('Producto actualizado:', productoActualizado); 
  
    //   // 4. Eliminar un cliente y sus pedidos asociados
    //   const clienteEliminado = await eliminarCliente(2);
    //   console.log('Cliente eliminado:', clienteEliminado);
  
    //   // 5. Consultar los pedidos de un cliente
    //   const pedidosCliente = await obtenerPedidosPorCliente(3);
    //   console.log('Pedidos del cliente:', pedidosCliente);
    } catch (error) {
      console.error('Error en la operación principal:', error.message);
    }
  };
  
  main();
  