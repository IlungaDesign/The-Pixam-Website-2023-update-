import React from 'react';
import './Footer.css';
import {useForm} from "react-hook-form";

function Footer () {

    const { register, handleSubmit, formState:{errors} } = useForm();

    function onFormSubmit(data) {
        console.log(data);
    }

    console.log('Errors', errors);

    return (

        <footer className="container-footer">
            <h>Volg ons op:</h>

            <div className="icons-footer">
                <ul className="icons-social-media">
                    <li>
                        <a href="https://youtube.com" rel="noopener noreferrer">
                             <i className="fa-brands fa-youtube fa-1x"></i>
                        </a></li>
                    <li>
                        <a href="https://youtube.com" rel="noopener noreferrer">
                            <i className="fa-brands fa-facebook fa-1x"></i><
                            /a>
                    </li>
                    <li>
                        <a href="https://youtube.com" rel="noopener noreferrer">
                            <i className="fa-brands fa-twitter fa-1x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://youtube.com" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram-square fa-1x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://youtube.com" rel="noopener noreferrer">
                            <i className="fa-brands fa-snapchat-square fa-1x"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <form className="form-footer" onSubmit={handleSubmit(onFormSubmit)}>
                <input
                    type="text"
                    placeholder="Je email address"
                    name="name" required
                    {...register('emailNewsletter', {
                        required: 'Email is verplicht',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Gelieve een geldig e-mailadres in te vullen',
                        },
                    })}

                    className="email-newsletter"
                />

                <input type="submit"
                       value="Subscribe"
                       name="mail"
                       required/>
            </form>

            {errors.emailNewsletter && <p className="errors-message-footer-page2">
                {errors.emailNewsletter.message}</p>}

            <p>Ontvang informatie over nieuwe Pixam-diensten.</p>
            <p className="text-copyright">Copyright © 2022 by Pixam and Micheal Ilunga. All rights reserved.</p>
        </footer>

    );
}

export default Footer;