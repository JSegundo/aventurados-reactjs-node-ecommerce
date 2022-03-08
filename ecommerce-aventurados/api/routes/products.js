const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  if (!req.user.rol == "admin") return res.sendStatus(401);
  //Product.create(req.body)
  res.send("se creo un nuevo producto");
});

router.put("/:id", (req, res) => {
  if (!req.user.rol == "admin") return res.sendStatus(401);
  //Product.update(req.body)
  res.send("se modifico un producto");
});

router.delete("/:id", (req, res) => {
  if (!req.user.rol == "admin") return res.sendStatus(401);
  //Product.create(req.body)
  res.send("se elimino un producto");
});

router.get('/', (req, res) => {
    //Products.findAll()
    res.send('todos los productos')
})

router.get('/:id', (req, res) => {
    //Products.findOne(req.params.id)
    res.send('detalles del producto')
})

router.get('/:idCategoria', (req, res) => {
    //Products.findAll( where: {idCategorias})
    res.send('por categorias')
})

router.get('/search', (req, res) => {
    //const {query} = req.query
    res.send('producto encontrado')
})

module.exports = router;
