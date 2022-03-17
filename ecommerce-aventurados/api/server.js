const db = require("./config/db");
const express = require("express");
const app = express();
const router = require("./routes");
const volleyball = require("volleyball");
const cors = require("cors");
//const mail = require('./config/mail/mail');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(volleyball);
app.use("/api", router);

//middleware error (error handler)
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

db.sync({ force: false }) //agrego la sincronizacion en true.
  .then(function () {
    console.log("DB Conected");
    app.listen(3001, () =>
      console.log("Servidor escuchando en el puerto 3001")
    );
  });

//sudo -u postgres psql -d dbaventura -a -f /home/joaco/Programación/aventurados/ecommerce-aventurados/api/aventurados-seed.sql
//sudo -u postgres psql -d dbaventura -a -f /home/segundo/Documents/CODE/BOOTCAMP/chekpoints/aventurados/ecommerce-aventurados/api/aventurados-seed.sql
