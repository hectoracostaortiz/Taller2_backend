import { DataTypes } from 'sequelize';
import { sequelize } from "../DB/db.js";
const Usuario = sequelize.define('usuario', {
  // Definicion de atributos
  ide: {
    type: DataTypes.STRING,
    allowNull: true,
    primaryKey: true
  },
  usuario: {
    type: DataTypes.STRING
  },
  clave: {
    type: DataTypes.STRING
  }
}, {
    timestamps: false
});
export { Usuario }
