import Sequelize from "sequelize";
import database from "../db/db.js";

const Product = database.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  clientName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  orderDate: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  deliveryDate: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default Product;
