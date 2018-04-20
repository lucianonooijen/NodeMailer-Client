# NodeMailer-Client

Server- and client-side implementation of NodeMailer with MJML rendering included

## Why?

As a front-end oriented developer I like to send my client good-looking emails for important announcements. Also, as a front-end oriented developer I rather make an IE6 compatible website than write HTML emails. For this reason I write emails in [MJML](https://mjml.io). Because I send these emails in small batches using an email provider is kinda overkill, but there are no easy ways to send HTML emails from Gmail. For this reason I decided to create a Node REST API to easily render and send emails using Nodemailer. When this is completely done and dusted I would like to add a basic interface that works together with the API to make it a bit more user friendly to use the service.

## Routes

Type | Route                | Description
-----|----------------------|------------------
POST | /api/mjml/render     | Post `{ "mjml": "[your mjml]" }` to this route to generate HTML
POST | /api/mailer/send     | Route to send your html email. Please refer to the [Email sender payload](#email_sender_payload) section
GET  | /api/mailer/send     | Sends an example email sender payload

## Email sender payload

To send an email please use the following payload (json):

```js
{
    "type": "mjml/html", // Whether you are sending ready-to-go HTML or if you want MJML rendered first
    "test": true/false, // Wheter you are sending a test email (send the email to the reply-to address) or if you want to send it to the receipients
    "smtp": { // SMTP settings
        "port": 587/465, // Optional, defaults to 587 is secure is false or 465 if true
        "host": "example.com", // Is the hostname or IP address to connect to
        "secure": true, // If true the connection will use TLS when connecting to server. If false (the default) then TLS is used if server supports the STARTTLS extension. In most cases set this value to true if you are connecting to port 465. For port 587 or 25 keep it false
        "user": "username", // SMTP username
        "pass": "password" // SMTP password
    },
    "message": { // Message fields
        "from": "from@example.com", // From email, you can also use `John Doe <john@doe.com>`
        "to": "to@example.com", // To email address(es). See note below for more info
        "cc": "cc@example.com", // Cc email address(es). See note below for more info
        "bcc": "bcc@example.com", // Bcc email address(es). See note below for more info
        "subject": "Subject" // The email subject
    },
    "body": "HTML or MJML, as you selected in the 'type' field" // HTML or MJML string
}
```

For the `to`, `cc` and `bcc` fields you can use a single email address, a comma separated list or an array of email addresses. You can add email addresses to write them just like `john@doe.com`, or you can use the following object notation:

```js
{
    "name": "John Doe",
    "address": "john@doe.com"
}
```

You can mix the normal email notation and the object notation in any way you like.

### Licence

This project is GPL-3.0 licenced.

### Contributors

* [Luciano Nooijen](https://github.com/lucianonooijen)