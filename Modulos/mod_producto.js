import { DataTypes } from 'sequelize';
import { sequelize } from "../DB/db.js";
const Producto = sequelize.define('productos', {
  // Definicion de atributos
  ide: {
    type: DataTypes.INTEGER,
    allowNull: true,
    primaryKey: true,
    autoiIncrement: true
  },
  nombre: {
    type: DataTypes.STRING
  },
  tipo: {
    type: DataTypes.STRING
  },
  descripcion: {
    type: DataTypes.STRING
  },
  precio_compra: {
    type: DataTypes.INTEGER
  },
  precio_venta: {
    type: DataTypes.INTEGER
  },
  cant_disponible: {
    type: DataTypes.INTEGER
  },
  uni_medida: {
    type: DataTypes.STRING
  }
}, {
    timestamps: false
});
export { Producto }
