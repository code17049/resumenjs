"use strict";

let http = require("http").createServer(webServer),
  form = require("fs").readFileSync("assets/index.html"),
  querystring = require("querystring"),
  util = require("util"),
  dataString = "";

function webServer(req, res) {
  if (req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.end(form);
  }
  if (req.method === "POST") {
    req.on("data", (data) => (dataString += data));
    req.on("end", () => {
      let formValues = {},
        objectString = new URLSearchParams(dataString);
      objectString.forEach((value, name) => {
        formValues[name] = value;
      });

      let templateString = `
      Los datos que enviaste por POST como string son: ${dataString}
      Los datos que enviaste por POST como objecto son: ${JSON.stringify(
        formValues
      )}
      `;
      console.log(templateString);
      res.end(templateString);
    });
  }
}

http.listen(3000);

console.log("Servidor corriendo en " + "http://localhost:3000");