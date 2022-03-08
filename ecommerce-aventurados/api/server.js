const db = require('./config/db')





db.sync({force:true}) //agrego la sincronizacion en true.
.then(function () {
  console.log("DB Conected")
    app.listen(3001, () => console.log("Servidor escuchando en el puerto 3001"));
})
