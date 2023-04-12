import Product from "../models/Product.js";
import database from "../db/db.js";

export const readProductController = async (req, res) => {
  try {
    await database.sync();
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.send(error);
  }
};

export const addProductController = async (req, res) => {
  const { clientName, orderDate, deliveryDate, status } = req.body;
  try {
    await database.sync();
    const products = await Product.create({
      clientName,
      orderDate,
      deliveryDate,
      status,
    });
    console.log(products);
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const updateProductController = async (req, res) => {
  const { id, clientName, orderDate, deliveryDate, status } = req.body;
  try {
    await database.sync();

    const product = await Product.findByPk(id);
    if (clientName) product.clientName = clientName;
    if (orderDate) product.orderDate = orderDate;
    if (deliveryDate) product.deliveryDate = deliveryDate;
    if (status) product.status = status;

    const resultSave = await product.save();

    res.json(resultSave);
  } catch (error) {
    res.send(error);
  }
};

export const deleteProductController = async (req, res) => {
  const { id } = req.params;

  console.log(Object.entries(req));
  try {
    await database.sync();

    const product = await Product.findByPk(id);
    product.destroy();
    res.status(200).send(`Deleted ${id}`);
  } catch (error) {
    res.send(error);
  }
};
