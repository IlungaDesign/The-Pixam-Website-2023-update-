import React from 'react';
import TopMenu from "../../components/TopMenu/TopMenu";
import Footer from "../../components/Footer/Footer";
import './Contact.css';
import {useForm} from 'react-hook-form';
import TopMenu2 from "../../components/TopMenu2/TopMenu2"

function Contact () {

    const { register, handleSubmit, formState:{errors} } = useForm();

    function onFormSubmit(data) {
        console.log(data);
    }

    console.log('Errors', errors);

    return (
        <>
            <TopMenu/>
            <TopMenu2/>

            <section className="section-contact">
                <div className="section-contact-form">
                    <h1>Vraag ons alles</h1>

                    <form onSubmit={handleSubmit(onFormSubmit)}>

                        <label>
                           <input type="text"
                               placeholder="Jouw naam.."
                               className="name1"
                               id="j-naam"
                               {...register("name", {
                                   required: "Naam is verplicht",
                                   minLength: {
                                       value: 3,
                                       message: "Naam moet minimaal 3 karakters bevatten"
                                   },
                               })}
                           />

                        {errors.name && <p className="errors-style">{errors.name.message}</p>}

                        </label>

                        <input
                            placeholder="Email"
                            {...register('email', {
                                required: 'Email is verplicht',
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Voer alstublieft een geldig email in',
                                },
                            })}
                            type="email"
                            required
                            className="email1"
                        />

                        {errors.email&&<p className="errors-style">{errors.email.message}</p>}

                        <input
                            placeholder="telefoonummer"
                            {...register('telefoonummer', {
                                required: 'Telefoonummer is verplicht',
                                minLength: {
                                    value: 10,
                                    message: 'Voer alstublieft een geldig telefoonnummer in'
                                },
                                maxLength: {
                                    value: 10,
                                    message: 'Voer alstublieft een geldig telefoonnummer in'
                                }
                            })}
                            type="number"
                            required
                            className="phone-number1"
                        />

                        {errors.telefoonummer && <p className="errors-style">{errors.telefoonummer.message}</p>}

                        <label>
                            <textarea id="subject-id"
                                  className="textarea1"
                                  placeholder="Schrijf iets .."
                                  rows="4"
                                  cols="40"
                            {...register('subject', {
                                maxLength: {
                                value: 5,
                                message: "Opmerking mag maximaal 50 karakters bevatten"},
                            })}
                            >
                            </textarea>

                            {errors.subject && <p className="errors-style">{errors.subject.message}</p>}

                        </label>

                        <button type="submit" value="contact">verstuur</button>
                    </form>

                </div>

                <div className="section-contact-text">

                    <br/><br/><h>NEEM CONTACT MET ONS OP</h><br/><br/>

                    <p1>Onze expert</p1><br/>
                    <p1>Michael Ilunga</p1><br/>
                    <p>Frontend Developer</p><br/>
                    <p>M.Jae@pixam.nl</p>
                    <p>+3178365123e</p><br/>
                    <p1>Vind ons op :</p1>

                    <ul className="icons-social-contact">
                        <li><a href="https://www.youtube.com" target="_blank" class="icon-social-media-contact"><i className="fa-brands fa-youtube fa-1x"></i></a></li>
                        <li><a href="https://www.facebook.com" target="_blank" class="icon-social-media-contact"><i className="fa-brands fa-facebook fa-1x"></i></a></li>
                        <li><a href="https://twitter.com" target="_blank" class="icon-social-media-contact"><i className="fa-brands fa-twitter fa-1x"></i></a></li>
                        <li><a href="https://www.instagram.com" target="_blank" class="icon-social-media-contact"><i className="fa-brands fa-instagram-square fa-1x"></i></a></li>
                        <li><a href="https://accounts.snapchat.com" target="_blank" class="icon-social-media-contact"><i className="fa-brands fa-snapchat-square fa-1x"></i></a></li>
                    </ul>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Contact;