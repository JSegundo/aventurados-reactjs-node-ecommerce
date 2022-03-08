const db = require('./config/db')
const express = require('express')
const app = express()
const router = require('./routes')

router.use(express.json())

app.use('/api', router)


db.sync({force:true}) //agrego la sincronizacion en true.
.then(function () {
  console.log("DB Conected")
    app.listen(3001, () => console.log("Servidor escuchando en el puerto 3001"));
})
