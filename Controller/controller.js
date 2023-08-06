import { Producto } from '../Modulos/mod_producto.js';
import { Usuario } from '../Modulos/mod_usuario.js';

const getElProducto = async (req, res) => {
    const { ide } = req.params;
    try {
        const producto = await Producto.findByPk(ide);
        res.status(200).json([producto]);
    } catch (error) {
        res.status(400).json({ mensaje: error });
    }
};

const getProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.status(200).json(productos);
    } catch (error) {
        res.status(400).json({mensaje: error});
    }
};

const postProductos = async (req, res) => {
    const {nombre, tipo, descripcion, precio_compra, precio_venta, cant_disponible, uni_medida} = req.body;
    try {
        const newProducto = await Producto.create({
            nombre,
            tipo,
            descripcion,
            precio_compra,
            precio_venta,
            cant_disponible,
            uni_medida
        });
        res.status(200).json(newProducto);
    } catch (error) {
        res.status(400).json({mensaje: error});
    }
};

const putProductos = async (req, res) => {
    const {ide} = req.params;
    const {nombre, tipo, descripcion, precio_compra, precio_venta, cant_disponible, uni_medida} = req.body;
    try {
        const oldProducto = await Producto.findByPk(ide);
        oldProducto.nombre = nombre;
        oldProducto.tipo = tipo;
        oldProducto.descripcion = descripcion;
        oldProducto.precio_compra = precio_compra;
        oldProducto.precio_venta = precio_venta;
        oldProducto.cant_disponible = cant_disponible;
        oldProducto.uni_medida = uni_medida;
        const modProducto = await oldProducto.save();
        res.status(200).json(modProducto);
    } catch (error) {
        res.status(400).json({mensaje: error});
    }
    
};

const delProducto = async (req, res) => {
    const {ide} = req.params;
    try {
        const respuesta = await Producto.destroy({
            where: {
                ide: ide
            }
        });
        res.status(200).json({mensaje: "Retistro eliminado"});
    } catch (error) {
        res.status(400).json({mensaje: "Retistro NO eliminado " + error});
    }
};

const filtrarProductos = async (req, res) => {
    const { tipo } = req.params;
    console.log("tipo: "+tipo);
    try {
        const productos = await Producto.findAll({
            where: {
                tipo: tipo
            }
        });
        res.status(200).json(productos);
    } catch (error) {
        res.status(400).json({mensaje: error});
    }
};

const consultarUsuarioLogin = async (req, res) => {
    const {usuario, clave} = req.body;
    //console.log(usuario);
    try {
        const respuesta = await Usuario.findAll({
            where: {
                clave: clave,
                usuario: usuario
            }
        });
        res.status(200).json({mensaje: "Usuario encontrado -> "+clave});
    } catch (error) {
        res.status(400).json({mensaje: "Usuario NO encontrado " + error});
    }
};

export {
    getProductos,
    getElProducto,
    postProductos,
    delProducto,
    putProductos,
    filtrarProductos,
    consultarUsuarioLogin
};  