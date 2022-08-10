const mongoose = require('mongoose');

mongoose.model('Doctor', new mongoose.Schema({
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
}, { timestamps: true }));

module.exports = mongoose.model('Doctor');