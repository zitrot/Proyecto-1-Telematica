const express = require('express');
const ruta = express.Router();

const Tarea = require('../modelos/tarea');
ruta.get('/', async(req, res) => {
    const tasks = await Tarea.find();
    res.json(tasks);
});
ruta.get('id:', async(req, res) => {
    const tarea = await Tarea.findById(req.params.id);
    res.json(tarea);
});
ruta.post('/', async(req, res) => {
    const { title, description } = req.body;
    const tarea = new Tarea({
        title,
        description
    });
    await tarea.save();
    res.json({ status: "tarea guardada" });
});

ruta.put('/:id', async(req, res) => {
    const { title, description } = req.body;
    const newTarea = { title, description };
    await Tarea.findOneAndUpdate(req.params.id, newTarea);
});

ruta.delete('/:id', async(req, res) => {
    await Tarea.findOneAndUpdate(req.params.id, newTarea);
    res.json({ status: "tarea eliminada" });
});
module.exports = ruta;