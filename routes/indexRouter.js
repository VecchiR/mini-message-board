const { Router } = require("express");
const messages = require('../models/messages.js');

const router = Router();

router.get('/', (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages.messageList })
});

module.exports = router;