// Consigna: Gestión de Tienda Virtual
// Se pide desarrollar un sistema para gestionar la base de datos de una tienda llamada Tienda Virtual. Este sistema debe incluir las siguientes funcionalidades:
// Obtener todos los productos de la tienda.
// Registrar un nuevo cliente.
// Actualizar el precio de un producto existente.
// Eliminar un cliente y sus pedidos asociados.
// Consultar los pedidos de un cliente específico.

// Base de Datos: Esquema Inicial
// Crear la base de datos tienda_virtual con las siguientes tablas:
// Tabla productos
// id (serial, primary key).
// nombre (varchar, not null).
// precio (integer, not null).
// Tabla clientes
// id (serial, primary key).
// nombre (varchar, not null).
// email (varchar, unique, not null).
// Tabla pedidos
// id (serial, primary key).
// cliente_id (integer, foreign key referenciando a clientes).
// producto_id (integer, foreign key referenciando a productos).
// cantidad (integer, not null).



// tienda_virtual/
// ├── db/
// │   ├── config.js              
// │   ├── queries/
// │   │   ├── productos/
// │   │   │   ├── obtenerProductos.js
// │   │   │   ├── actualizarPrecioProducto.js
// │   │   ├── clientes/
// │   │   │   ├── registrarCliente.js
// │   │   │   ├── eliminarCliente.js
// │   │   ├── pedidos/
// │   │       ├── obtenerPedidosPorCliente.js
// ├── index.js 
// └── .env 

