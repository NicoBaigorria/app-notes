const express = require('express');
const router = express.Router();

router.get('/contact/add', (req, res) => {
    res.render('contacts/new-contact');
});

router.get('/notes', (req, res) => {
    res.send('Notes from database');
});

module.exports = router;