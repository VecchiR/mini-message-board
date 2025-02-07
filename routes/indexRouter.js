const { Router } = require("express");
const messagesController = require("../controllers/messageController");

const router = Router();

router.get('/', messagesController.getAllMessages);

module.exports = router;