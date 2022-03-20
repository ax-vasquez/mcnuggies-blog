import 'dotenv/config'
import express from 'express'
import { sendEmail } from './nodemailer'

const app = express()
const port = process.env.PORT || 3001

app.post('/submit', async (req, res) => {
    try {
        await sendEmail(
            'test@doodles.someplace',
            'some subject',
            'Hello buttnugget!'
        )
    } catch (e) {
        console.log(`Could not send email: `, e)
    }
    
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
