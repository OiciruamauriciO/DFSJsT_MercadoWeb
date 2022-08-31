const express = require("express");
const exphbs = require("express-handlebars");
const fs = require("fs");
const app = express();
const port = 3000;

let data=JSON.parse(fs.readFileSync("products-data.json", "utf-8"));

app.set("view engine", "handlebars");

app.engine(
  "handlebars",
  exphbs.engine({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/components/",
    defaultLayout: null,
    extname: "handlebars",
  })
);

app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/assets", express.static(__dirname + "/assets"));
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
/*app.use("/jsJS", express.static(__dirname + "/node_modules/bootstrap/js/src"));*/

app.get("/", function (req, res) {
  res.render("main", {
    layout: "main",
    indexTitle: "Bienvenido al mercado WEB, seleccione sus productos",
    documentTitle: "Desafío Mercado Web",
    productsData: data,
  });
});

app.listen(port, () => console.log(`App corriendo en el puerto ${port}`));
