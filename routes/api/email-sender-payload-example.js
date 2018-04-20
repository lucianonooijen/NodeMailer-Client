const payload = {
    type: 'mjml/html',
    test: false,
    smtp: {
        port: 587,
        host: 'example.com',
        secure: true,
        user: 'username',
        pass: 'password',
    },
    message: {
        from: '"John Doe" from@example.com',
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
    body: "HTML or MJML, as you selected in the 'type' field",
};

module.exports = payload;