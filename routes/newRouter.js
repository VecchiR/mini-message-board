const { Router } = require("express");

const router = Router();

router.get('/', (req, res) => {
    res.render('form', {title: 'New message form'});
});

router.post('/', (req, res) => {
    res.send('yas');
});

module.exports = router;