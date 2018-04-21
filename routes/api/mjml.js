const express = require('express');
const mjml = require('mjml');
// const $ = require('cheerio');

const router = express.Router();

router.post('/render', (req, res) => {
    if (!req.body.mjml) {
        return res.status(400).send('MJML in post body not found');
    }
    try {
        res.send(mjml(req.body.mjml).html);
    } catch (err) {
        res.status(500).send('Error while trying to parse MJML');
    }
    return null;
});

module.exports = router;
