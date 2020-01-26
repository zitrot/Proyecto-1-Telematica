const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../helpers/auth');
const Note = require('../models/Note');
const User = require('../models/User');
router.get('/notes/add', isAuthenticated, (req, res) => {
    res.render('notes/Nueva-Nota');
});
router.post('/notes/Nueva-Nota', isAuthenticated, async(req, res) => {
    const latitude = Math.random() * 1000;
    const longitude = Math.random() * 1000;
    const description = "registro de inicio de sesion";
    const newNote = new Note({ description, latitude, longitude });
    newNote.user = req.user.id;
    await newNote.save();
    res.redirect('/notes');


});
router.get('/notes', isAuthenticated, async(req, res) => {
    const notes = await Note.find({ user: req.user.id }).sort({ date: 'desc' });
    res.render('notes/all-notes', { notes });
});
module.exports = router;