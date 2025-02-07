const { Router } = require("express");
const messagesController = require("../controllers/messageController");

const router = Router();

router.get('/', messagesController.createMessageGet);
router.post('/', messagesController.createMessagePost);

module.exports = router;