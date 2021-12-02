import { Sequelize, DataTypes } from "sequelize";

export default async function connectDb() {
  const sequelize = new Sequelize("olga_website", process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
  });

  let models = {};
  models["testModel"] = sequelize.define("TestModel", {
    test: {
      type: DataTypes.STRING,
    },
  });

  await sequelize.sync();
  return models;
}
