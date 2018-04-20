# NodeMailer-Client

Server- and client-side implementation of NodeMailer with MJML rendering included

## Why?

As a front-end oriented developer I like to send my client good-looking emails for important announcements. Also, as a front-end oriented developer I rather make an IE6 compatible website than write HTML emails. For this reason I write emails in [MJML](https://mjml.io). Because I send these emails in small batches using an email provider is kinda overkill, but there are no easy ways to send HTML emails from Gmail. For this reason I decided to create a Node REST API to easily render and send emails using Nodemailer. When this is completely done and dusted I would like to add a basic interface that works together with the API to make it a bit more user friendly to use the service.

## Routes

Type | Route                | Description
-----|----------------------|------------------
POST | /api/mjml/render     | Post `{ "mjml": "[your mjml]" }` to this route to generate HTML
POST | /api/mailer/send     | Route to send your html email. Please refer to the [Email sender payload](#email_sender_payload) section

## Email sender payload

TO send an email please use the following payload (json):

```json
{
    "type": "mjml/html", // Whether you are sending ready-to-go HTML or if you want MJML rendered first
    "test": true/false, // Wheter you are sending a test email (send the email to the reply-to address) or if you want to send it to the receipients
}
```

### Contributors

* [Luciano Nooijen](https://github.com/lucianonooijen)