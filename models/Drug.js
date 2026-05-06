const mongoose = require('mongoose');

const drugSchema = new mongoose.Schema({
    name: { type: String, required: true },
    batch: { type: String, required: true, unique: true }, // unique prevents duplicates!
    generic: String,
    mfgDate: String,
    expDate: String,
    form: String,
    strength: String,
    qty: Number,
    barcode: String,
    storage: String,
    composition: String
}, { timestamps: true });

module.exports = mongoose.model('Drug', drugSchema);