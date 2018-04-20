const express = require('express');
const mailer = require('nodemailer');
const emailSenderPayloadExample = require('./email-sender-payload-example');
const router = express.Router();

router.get('/send', (req, res) => res.json(emailSenderPayloadExample));

router.post('/send', (req, res) => res.send('working'));

module.exports = router;
