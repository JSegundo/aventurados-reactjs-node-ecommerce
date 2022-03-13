const db = require("./config/db");
const express = require("express");
const app = express();
const router = require("./routes");
const {
  Users,
  UserRol,
  Products,
  Ordenes,
  Estados,
  Categorias,
  Carritos,
} = require("./models");
const bodyParser = require("body-parser");
const volleyball = require('volleyball')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(volleyball)
app.use("/api", router);

db.sync({ force: false }) //agrego la sincronizacion en true.
  .then(function () {
    console.log("DB Conected");
    app.listen(3001, () =>
      console.log("Servidor escuchando en el puerto 3001")
    );
  });

//sudo -u postgres psql -d dbaventura -a -f /home/hpadmin/Desktop/E-Commerce/aventurados/ecommerce-aventurados/api/aventurados-seed.sql
