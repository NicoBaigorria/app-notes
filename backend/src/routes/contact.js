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
            req.flash('success_msg', 'Contacto agregado!')
            res.redirect('/contacts')
        }
});

router.get('/contacts', async (req, res) => {    
    const contacts = await Contact.find().sort({date: 'desc'});
    res.render('contacts/all-contacts', { contacts });
});

router.get('/contacts/edit/:id', async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.render('contacts/edit-contact', {contact});
});

router.put('/contacts/edit-contact/:id', async (req, res) => {
    const { title, description }= req.body;
    await Contact.findByIdAndUpdate(req.params.id, { title, description });
    req.flash('success_msg', 'Contacto Actualizado!');
    res.redirect('/contacts');
});

router.delete('/contacts/delete/:id', async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id)
    req.flash('success_msg', 'Contacto Eliminado');
    res.redirect('/contacts');
});

module.exports = router;