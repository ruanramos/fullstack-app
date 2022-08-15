const mongoose = require('mongoose');

mongoose.model('User', new mongoose.Schema({
    login: { type: String, required: true },
    password: { type: String, required: true }
}, { timestamps: true }));

module.exports = mongoose.model('User');