const express = require('express');
const router = express.Router();

router.get('/signin', (req, res) => {
    res.send('Cargando app');
});

router.get('/signup', (req, res) => {
    res.send('Formulario de authentificacion')
});

module.exports = router;