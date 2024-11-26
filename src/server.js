const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("/db.json"); // Replace with your db.json path
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 3000, () => {
  console.log("JSON Server is running");
});
