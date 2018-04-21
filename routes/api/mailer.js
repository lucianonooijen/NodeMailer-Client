const express = require('express');
const mailer = require('nodemailer');
const { body, oneOf, validationResult } = require('express-validator/check');
const emailSenderPayloadExample = require('./email-sender-payload-example');

const router = express.Router();

router.get('/send', (req, res) => res.json(emailSenderPayloadExample));

router.post('/send', [
    body('type', 'Type must be "HTML" or "MJML"').isIn(['mjml', 'html']),
    body('test', 'Test must be a boolean').isBoolean(),
    body('smtp.port', 'SMTP port must be a number').isNumeric(),
    body('smtp.host', 'SMTP host must be a string').isString(),
    body('smtp.secure', 'SMTP secure must be a boolean').isBoolean(),
    body('smtp.user', 'SMTP user must be a string').isString(),
    body('smtp.pass', 'SMTP pass must be a string').isString(),
    body('message.from', 'Message from must be a string').isString(),
    body('message.subject', 'Message subject must be a string').isString(),
    body('body', 'Body must be a string').isString(),
    oneOf([ // You need at least 1 receipient
        body('message.to', 'Include at least 1 receipient in to, cc or bcc').exists(),
        body('message.cc', 'Include at least 1 receipient in to, cc or bcc').exists(),
        body('message.bcc', 'Include at least 1 receipient in to, cc or bcc').exists(),
    ], 'You should include at least 1 receipient'),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.mapped(),
            exampleRequest: emailSenderPayloadExample,
        });
    }
    res.send('ok');
    return null;
});

module.exports = router;
