const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');
router.get('/users/signin', (req, res) => {
    res.render('users/signin');
});


router.post('/users/signin', passport.authenticate('local', {
    successRedirect: '/notes/add',
    failureRedirect: '/users/signin',
    failureFlash: true
}));


router.get('/users/signup', (req, res) => {
    res.render('users/signup');
});


router.post('/users/signup', async(req, res) => {
    const { name, email, password, confirm_password } = req.body;
    const errors = []
    if (name <= 0 || password <= 0 || email <= 0 || confirm_password <= 0) {
        errors.push({ text: 'Uno de los campos esta vacio' });

    }
    if (password != confirm_password) {
        errors.push({ text: 'las contraseñas no coinciden' });
    }
    if (errors.length > 0) {
        res.render('users/signup', { errors, name, email, password, confirm_password });
    } else {
        const emailUser = await User.findOne({ email: email });
        if (emailUser) {
            req.flash('error_msg', 'El correo ya se encuentra en uso');
            res.redirect('/users/signup');
        } else {
            const newUser = new User({ name, email, password });
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_msg', 'Estas registrado');
            res.redirect('/users/signin');
        }
    }

});

router.get('/users/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});
module.exports = router;