const db = require('./config/db')
const express = require('express')
const app = express()
const router = require('./routes')
const {Users,UserRol,Products,Ordenes,Estados,Categorias,Carritos} = require('./models')
const bodyParser= require('body-parser');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.json());
app.use("/api", router);


db.sync({force:true}) //agrego la sincronizacion en true.
.then(function () {
  console.log("DB Conected")
    app.listen(3001, () => console.log("Servidor escuchando en el puerto 3001"));
})


<<<<<<< HEAD
//sudo -u postgres psql -d dbaventura -a -f /api/aventurados-seed.sql
=======


//sudo -u postgres psql -d dbaventura -a -f /api/aventurados-seed.sql
>>>>>>> 9071a7a7f9e98ea7aa71ff6163dd9f29a075b69b
