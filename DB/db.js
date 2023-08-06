import Sequelize from "sequelize";

const sequelize = new Sequelize("fruverlahuerta", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

export { sequelize }

