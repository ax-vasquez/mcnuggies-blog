import React, { FunctionComponent, useState } from 'react'
import { Button } from 'react-bootstrap'
import styles from './ContactForm.module.scss'

// TODO: 
const FORM_ENDPONT = `http://localhost:3001/submit`

export const ContactForm: FunctionComponent = () => {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true)
        }, 100)
    }

    if (submitted) {
        return (
          <div className={styles.submitted}>
            <span>Thank you!</span>
            <p>We&apos;ll be in touch soon</p>
          </div>
        )
    }

    return (
      <form
        action={FORM_ENDPONT}
        onSubmit={handleSubmit}
        method='POST'
        target='_blank'
        className={styles.contactForm}
      >
        <div className={styles.inlineInput}>
          <span>Name:</span>
          <input
                id='name'
                type='text'
                name='name'
                className=''
                required
            />
        </div>
        <div className={styles.inlineInput}>
          <span>email:</span>
          <input
                id='email'
                type='text'
                name='email'
                className=''
                required
            />
        </div>
        <div className={styles.textArea}>
          <textarea
                id='message'
                placeholder='Message'
                name='message'
                className=''
                required
            />
        </div>
        <div className={styles.controls}>
          <Button
            type='submit'
          >
            Submit
          </Button>
        </div>
      </form>
    )
}
