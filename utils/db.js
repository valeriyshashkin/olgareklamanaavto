import { Sequelize, DataTypes } from "sequelize";

export default async function connectDb() {
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: "mysql",
    }
  );

  let models = {};

  models["admin"] = sequelize.define("admin", {
    name: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  });

  models["image"] = sequelize.define("image", {
    url: {
      type: DataTypes.STRING,
    },
  });

  models["content"] = sequelize.define("content", {
    name: {
      type: DataTypes.STRING,
    },
    value: {
      type: DataTypes.STRING,
    },
  });

  await sequelize.sync();
  return models;
}
