const { Router } = require("express");

const router = Router();

router.get('/', (req, res) => {
    res.render('form', {title: 'New message form'});
});

module.exports = router;