const { Router } = require("express");
const messages = require('../models/messages');

const router = Router();

router.get('/', (req, res) => {
    res.render('form', {title: 'New message form'});
});

router.post('/', (req, res) => {
    const messageUser = req.body.messageUser;
    const messageText = req.body.messageText;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect('/');
});

module.exports = router;