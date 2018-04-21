/* eslint-disable */

const payload = {
    type: 'mjml',
    test: false,
    smtp: {
        port: 587,
        host: 'example.com',
        secure: true,
        auth: {
            user: 'username',
            pass: 'password',
        }
    },
    message: {
        from: '"John Doe" from@example.com',
        replyto: "replyto@example.com",
        to: 'to@example.com',
        cc: 'cc1@example.com, cc2@example.com',
        bcc: [
            'bcc@example.com',
            '"John Doe" from@example.com',
            {
                name: "John Doe",
                address: "john@doe.com"
            }
        ],
        subject: 'Subject',
    },
    content: "<mjml><mj-body><mj-text>Hello world</mj-text></mj-body></mjml>",
};

module.exports = payload;