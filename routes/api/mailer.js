const express = require('express');
const router = express.Router();

router.use('/', (req, res) => {
    res.send('Mailer route working');
});

module.exports = router;
