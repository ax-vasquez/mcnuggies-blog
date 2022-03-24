import 'dotenv/config'
import express from 'express'
import { sendContactEmail } from './nodemailer'

const app = express()
const port = process.env.PORT || 3001

// Required so you can extract body info from form data
app.use(express.urlencoded({
    extended: true
}))

app.post('/submit', async (req, res) => {
    const {
        name,
        email,
        message
    } = req.body
    try {
        await sendContactEmail(
            name,
            email,
            message,
        )
        res.sendStatus(200)
    } catch (e) {
        if (e instanceof Error) console.log(`Could not send email: `, e.message)
        res.sendStatus(400)
    }
    
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
