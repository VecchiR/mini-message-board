const { Router } = require("express");
const messages = require('../models/messages');

const router = Router();

router.get('/:messageId', (req, res) => {
    const message = messages.messageList.find(msg => msg.id === Number(req.params.messageId));
    res.render('messageDetails', { message });
});

module.exports = router;