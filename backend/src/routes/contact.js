const express = require('express');
const router = express.Router();

router.get('/contact/add', (req, res) => {
    res.render('contacts/new-contact');
});

router.post('/notes/new-note', (req, res) => {
    const {title, description }= (req.body);
    const errors = [];
    if(!title) {
        errors.push({text: 'Porfavor escriba un titulo'});
    }
    if (!description) {
        errors.push({text: 'Porfavor escriba una nota'});
    }
    if(errors.length > 0) {
        res.render('contacts/new-contact', {
            errors,
            title,
            description
        });
        } else {
            res.send('ok');
        }
});

router.get('/notes', (req, res) => {
    res.send('Notes from database');
});

module.exports = router;