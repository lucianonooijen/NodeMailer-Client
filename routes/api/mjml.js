const express = require('express');
const router = express.Router();

router.use('/', (req, res) => {
    res.send('MJML route working');
});

module.exports = router;
