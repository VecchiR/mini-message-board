const { Router } = require("express");
const messages = require('../models/messages');

const router = Router();

router.get('/', (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages })
});

module.exports = router;