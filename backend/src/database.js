const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mern-tareas';
mongoose.connect(URI)
    .then(db => console.log('DB esta conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;