const { Router } = require("express");

const router = Router();

router.get('/', (req, res) => {
    res.send('on new now');
});

module.exports = router;