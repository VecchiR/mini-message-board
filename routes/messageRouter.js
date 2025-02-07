const { Router } = require("express");
const messagesController = require("../controllers/messageController");

const router = Router();

router.get('/:messageId', messagesController.getMessage);

module.exports = router;