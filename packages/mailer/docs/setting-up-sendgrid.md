# Setting up Sendgrid

Refer to this document when setting up your environment to start receiving emails from the contact form on the about page using Sendgrid.

> **Sendgrid is not the only Email API service you can use with `nodemailer`**. However, it's the provider I am currently using and wanted to document the setup.

## Use API Access only

You'll need to log in to Sendgrid and create an API key in order to use the Sendgrid service through `nodemailer`. 

Once you have the API key, add it to your `.env` file. It should look something like this:
```
SENDGRID_API_KEY=<SENDGRID_API_KEY>
CONTACT_EMAIL=<EMAIL_ADDRESS>
SENDER_EMAIL=<SENDER_EMAIL>
```
* The `CONTACT_EMAIL` field should be your personal email address - this is where contact message will be sent to
* `SENDER_EMAIL`
    * Seems like it _can_ be your personal address, if you'd like (though, it will appear as though you are emailing yourself with each contact form submission)
    * It's probably better to have an unmanaged account be the sender
        * If using ProtonMail, you may have some extra addresses to use - these work great for this, in my opinion (e.g., `robot@mydomain.com`, or whatever you are using)

## Create a Single Sender

1. Navigate to the [Sendgrid Sender Authentication](https://app.sendgrid.com/settings/sender_auth) page
2. Click **Verify a Single Sender**
3. Setup the sender identity to verify (you need a valid address to use as the sender - the value you used for `SENDER_EMAIL` above)
    * _You will need to provide a real physical address in order to adhere to anti-spam laws_
        * **UNDERSTAND THAT YOU MAY BE DISCLOSING YOUR HOME ADDRESS**
            * This is fine if you are only emailing yourself as is the case with the contact form
            * If you want to send emails through subscriptions or newsletters, you'll likely want to use a P.O. Box address (costs money, but is safer)
4. Done!

Once you have the Single Sender verified, you're ready to test!

### Why do I need the Single Sender?

Sendgrid needs a valid email address to send emails from. Without it, you'll hit this error:
```
The from address does not match a verified Sender Identity. Mail cannot be sent until this error is resolved.
```
