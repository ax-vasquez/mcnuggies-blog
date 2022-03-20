import nodemailer from 'nodemailer'

export async function sendEmail(
    sender: string,
    subject: string,
    message: string
) {

    /**
     * If you don't want to use Mailgun, you can configure this for other support providers,
     * or use an unlisted provider; you just need a service that provides an SMTP server so
     * you can send emails.
     * 
     * Click the link to see the list of well-known providers with built-in support with nodemailer
     * @see https://nodemailer.com/smtp/well-known/
     */
    const transporter = nodemailer.createTransport({
        service: 'Mailgun',
        auth: {
            user: process.env.MAILGUN_USER,
            pass: process.env.MAILGUN_PASS,
        }
    })

    const sendInfo = await transporter.sendMail({
        from: sender,
        to: process.env.CONTACT_EMAIL,
        subject: subject,
        text: message,
        html: `<b>${message}</b>`
    })

    console.log("Message sent: %s", sendInfo.messageId)
}
