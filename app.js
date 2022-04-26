//Usando objeto express
const express = require("express");
//App de express
const app = express();
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000;

//path inicial, respondera a la url localhost:3000
app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.get("/launchx", (req, res) => {
  res.send("Bienvenidos a Launch X");
});
//Regresando un objeto
//localhost:3000/explorersInNode
app.get("/explorersInNode", (req, res) => {
  const explorer = { name: "Explorer", msg: "Hello" };
  res.send(explorer);
});

//Query Params: Recibir parámetros por la url
//http://localhost:3000/explorers/carlo
//req.params = {"explorerName" : "o"}
app.get("/explorers/:explorerName", (req, res) => {
  res.send(req.params);
});

//Con esto inicializamos esta app
app.listen(port, () => {
  console.log(`Ejemplo de app escuchando en port ${port}`);
});
