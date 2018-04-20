const express = require('express');
const mailer = require('nodemailer');

const router = express.Router();

router.post('/send', (req, res) => res.send('working'));

module.exports = router;
