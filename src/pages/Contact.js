import React, { useState } from 'react';
import { validateEmail } from '../helpers/ValidateEmail';
import "../styles/Contact.css";

function Contact() {
   const [formState, setFormState] = useState({ name: '', email: '', message: ''});
   const { name, email, message } = formState;
   const [errorMessage, setErrorMessage] = useState('');
    // JSX

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }

        console.log('errorMessage', errorMessage);
    }

function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
}

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label className="formBox" htmlFor="name">Name:</label>
                    <input className="formBox" type="text" defaultValue={name} onBlur={handleChange} name="name"  />
                </div>
                <div>
                    <label className="formBox" htmlFor="email">Email:</label>
                    <input className="formBox" type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div className='message'>
                    <label className="formBox" htmlFor="message">Message:</label>
                    <textarea className="formBox messageBox" name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )

}

export default Contact;