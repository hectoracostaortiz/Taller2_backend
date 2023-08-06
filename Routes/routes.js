import { Router } from "express";
import { getProductos, getElProducto, postProductos, putProductos, delProducto, filtrarProductos, consultarUsuarioLogin } from '../Controller/controller.js';

const router = Router();

router.get("/", (req, res) => {
    res.send("GET Pagina Principal Express");
});

router.post("/login", consultarUsuarioLogin);

router.get("/productos", getProductos);
router.get("/fproductos/:tipo", filtrarProductos);
router.get("/productos/:ide", getElProducto);
router.post("/productos", postProductos);
router.put("/productos/:ide", putProductos);
router.delete("/productos/:ide", delProducto);

export default router;

