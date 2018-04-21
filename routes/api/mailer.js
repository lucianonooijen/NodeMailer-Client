const express = require('express');
const nodemailer = require('nodemailer');
const mjml = require('mjml');
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
    body('smtp.auth.user', 'SMTP user must be a string').isString(),
    body('smtp.auth.pass', 'SMTP pass must be a string').isString(),
    body('message.from', 'Message from must be a string').isString(),
    body('message.subject', 'Message subject must be a string').isString(),
    body('content', 'Content must be a string').isString(),
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

    try {
        const smtp = req.body.smtp; // eslint-disable-line prefer-destructuring
        const message = {
            ...req.body.message,
            to: req.body.test ? req.body.message.from : req.body.message.to,
            html: req.body.type === 'mjml' ? mjml(req.body.content).html : req.body.content,
        };
        const transporter = nodemailer.createTransport(smtp);
        transporter.sendMail(message, (err, info) => {
            if (err) {
                return res.json({
                    success: false,
                    err,
                    info,
                });
            }
            return res.json({
                success: true,
                message,
            });
        });
    } catch (err) {
        res.json({
            success: false,
            error: err,
        });
    }
    return null;
});

module.exports = router;
