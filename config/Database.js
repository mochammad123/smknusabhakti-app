import { Sequelize } from "sequelize";

const db = new Sequelize("smknbb_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
