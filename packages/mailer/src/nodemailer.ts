
import nodemailer from 'nodemailer'
import sendgridTransport from 'nodemailer-sendgrid-transport'

export async function sendContactEmail(
    name: string,
    email: string,
    message: string
) {

    const options = {
        auth: {
            api_key: process.env.SENDGRID_API_KEY
        }
    }

    const transporter = nodemailer.createTransport(sendgridTransport(options))

    const sendInfo = await transporter.sendMail({
        from: process.env.SENDER_EMAIL,
        to: process.env.CONTACT_EMAIL,
        subject: `CONTACT - ${name} - ${email}`,
        text: message,
        html: `<b>${message}</b>`
    })
}
