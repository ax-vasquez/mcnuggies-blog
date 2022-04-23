import 'dotenv/config'
import express from 'express'
import { sendContactEmail } from './nodemailer'
import cors from 'cors'
import parser from 'body-parser'

const app = express()
const port = process.env.PORT || 3001

app.use(cors())

// Required so you can extract body info from form data
app.use(express.urlencoded({
    extended: true
}))

const jsonParser = parser.json()
app.use(jsonParser)

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
