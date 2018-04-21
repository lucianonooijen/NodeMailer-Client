const express = require('express');
const mailer = require('nodemailer');
const { body, validationResult } = require('express-validator/check');
const emailSenderPayloadExample = require('./email-sender-payload-example');

const router = express.Router();

router.get('/send', (req, res) => res.json(emailSenderPayloadExample));

router.post('/send', [
    body('type', 'Type must be "HTML" or "MJML"').isIn(['mjml', 'html']),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.mapped() });
    }
    res.send('ok');
    return null;
});

module.exports = router;
