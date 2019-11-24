const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactSchema = new Schema({
    title: { type: String, require: true},
    description: { type: String, required: true},
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', ContactSchema)