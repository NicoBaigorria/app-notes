const express = require('express');
const router = express.Router();

const Contact = require('../models/Contact');

router.get('/contacts/add', (req, res) => {
    res.render('contacts/new-contact');
});

router.post('/contacts/new-contact', async (req, res) => {
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
            const newContact = new Contact({ title, description});
            await newContact.save();
            res.redirect('/contacts')
        }
});

router.get('/contacts', async (req, res) => {    
    const contact = await Contact.find().sort({date: 'desc'});
    res.render('contacts/all-contacts', { contact });
});

module.exports = router;