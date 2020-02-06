const mongoose = require('mongoose');
const { Schema } = mongoose;


const TareaSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model('tarea', TareaSchema);