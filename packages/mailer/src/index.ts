import express from 'express'
import { sendEmail } from './nodemailer'

const app = express()
const port = process.env.PORT || 3001

app.get('/submit', async (req, res) => {
    await sendEmail(
        'test@doodles.someplace',
        'some subject',
        'Hello buttnugget!'
    )
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
