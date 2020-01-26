const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    user: { type: String }
})

module.exports = mongoose.model('Note', NoteSchema)