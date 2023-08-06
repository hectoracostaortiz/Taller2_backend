import express from "express";
import router from "./Routes/routes.js";
import { sequelize } from "./DB/db.js";
import { Producto } from "./Modulos/mod_producto.js";
import cors from 'cors';

// Crear instancia de express
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(express.json());

app.set("puerto", 4000);
app.listen(app.get("puerto"), () => {
    console.log(`Servidor escuchando por el puerto ${app.get("puerto")}`);
});


// montar el enrutador en app principal
app.use(router);