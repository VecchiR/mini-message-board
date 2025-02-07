const messages = require('../models/messages.js');

function getAllMessages(req, res) {
    res.render("index", { title: "Mini Messageboard", messages: messages.messageList })
}

function getMessage(req, res) {
    const message = messages.messageList.find(msg => msg.id === Number(req.params.messageId));
    res.render('messageDetails', { message });
};

function createMessageGet(req, res) {
    res.render('form', { title: 'New message form' });
};

function createMessagePost(req, res) {
    const messageUser = req.body.messageUser;
    const messageText = req.body.messageText;
    messages.messageList.push({ id: ++messages.messageCount, text: messageText, user: messageUser, added: new Date() });
    res.redirect('/');
};


module.exports = {
    getAllMessages,
    getMessage,
    createMessageGet,
    createMessagePost
}


