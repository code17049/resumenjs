
const express = require('express');
const app = express();

let data = [];
const PORT = 3000;


//app.use(express.text());
app.use(express.json());

app.get("/micuenta/:name", (req, res) => {
  console.clear();
  console.log(data);
  const nameUser = req.params.name;
  if(!nameUser){
    return res.status(400).send("Ruta no encontrada");
  }
  res.status(200).send("Bienvenido");
});

app.post("/micuenta", (req, res) => {
  console.log(req.body);

  const name = req.body.name;
  data.push(name);
  res.status(200).json({
    postMessage: "Post has been saved!",
  });
  //res.send("Hola POST"); 
});

app.delete("/micuenta/:name", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  data = data.filter((n) => n != name);
  res.status(200).json({
    postMessage: "Post has been deleted!",
  });
  //res.send("Hola POST"); 
});

app.put("/micuenta/:name", (req, res) => {
  console.clear();
  console.log(data);
  const name = req.params.name;
  const repalcename = req.body.name;

  if(!repalcename){
    return res.status(404).send("Envia algo");
  }

  const foundNameindex = data.findIndex(n => n == name);

  if(foundNameindex == -1){
    return res.status(400).send("Ruta no encontrada");
  }
  
  data[foundNameindex] = repalcename;
  res.send();
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en el port: " + PORT);
});



