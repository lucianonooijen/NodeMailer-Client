const express = require('express');
const mjml = require('mjml');
// const $ = require('cheerio');

const router = express.Router();

router.use('/', (req, res) => {
    res.send('MJML route working');
});

module.exports = router;
