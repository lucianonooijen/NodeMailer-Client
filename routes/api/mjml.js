const express = require('express');
const mjml = require('mjml');
// const $ = require('cheerio');

const router = express.Router();

router.post('/render', (req, res) => {
    console.log(req.body);
    if (!req.body.mjml) {
        res.status(400);
        res.send('MJML in post body not found');
    } else {
        try {
            res.send(mjml(req.body.mjml).html);
        } catch (err) {
            res.status(500);
            res.send('Error while trying to parse MJML');
            console.log(err);
        }
    }
});

module.exports = router;
