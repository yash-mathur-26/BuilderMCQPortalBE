const http = require("http");
const app = require("./app");

const mysql = require("mysql");

mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "builder_mcq",
});

const port = 8000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`server running in port ${port}`);
});
