const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactSchema = new Schema({
    title: { type: String, require: true},
    description: { type: String, required: true},
    date: { type: Date, default: Date.now },
    user: {type: String }
});

module.exports = mongoose.model('Contact', ContactSchema)