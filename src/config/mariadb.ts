const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "shopping-mall",
  connectionLimit: 100,
});

// module.exports = pool;

export default pool;