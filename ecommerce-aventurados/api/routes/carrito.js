const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    //if (!req.user.rol == "admin") return res.sendStatus(401);
    //const {id} = req.user
    //const {id_product} = req.body
    //Carrito.create({userId: id, id_product})
    //.then( carrito => res.status(201).send(carrito)
    res.send('producto en carrito')
})

router.delete('/:id', (req, res) => {
    //id de params es de carrito
    //if (!req.user.rol == "admin") return res.sendStatus(401);
    //Carrito.delete(id).then()
    res.send('pructo de carrito borrado')
})

router.put('/:id', (req, res) => {
    //const {cantidad} = req.body
    //Carrito.findByPk(id).then( carrito => carrito.update(cantidad))
    res.send('cantidad modificada en carrito')
})

module.exports = router