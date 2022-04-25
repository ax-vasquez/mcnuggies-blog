# README - `mailer`

A simple express app that handles contact form submissions and sending an email to the site owner

## `dotenv` required configuration

```
SENDGRID_API_KEY=<sendgrid_api_key_with_mail_send_access>
SENDER_EMAIL=<automated_sender_email_address>
CONTACT_EMAIL=<your_email_address>
```

## Generating your SendGrid API Key

Once you have signed up for a SendGrid account, click "Settings" > API Keys. Then, click "Create API Key".

Select the following access level:
![sendgrid_access_level](./docs/images/sg_api_key_access_level.png)

Then, you **only** need to enable the following setting for this API key, since all it will be doing is sending mail:
![sendgrid_api_permission](./docs/images/sg_mail_send_permission.png)
