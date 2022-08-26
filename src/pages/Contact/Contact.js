import React from 'react';
import TopMenu from "../../components/TopMenu";
import Footer from "../../components/Footer";
import './Contact.css';
import {useForm} from 'react-hook-form';


function Contact () {

    const { register, handleSubmit, formState:{errors} } = useForm();

    function onFormSubmit(data) {
        console.log(data);
    }

    console.log('Errors', errors);

    return (
        <>
            <TopMenu/>

            <section className="section-contact">
                <div className="section-contact-form">
                    <h1>Vraag ons alles</h1>

                    <form onSubmit={handleSubmit(onFormSubmit)}>

                        <input type="text"
                               placeholder="Jouw naam.."
                               className="jouw-naam"
                               id="j-naam"
                               {...register("name", {
                                   required:"Naam is verplicht",
                                   minLength: {
                                       value: 3,
                                       message:"Naam moet minimaal 3 karakters bevatten"
                                   },
                               })}
                        />
                        {errors.name &&<p>{errors. name.message}</p>}

                        {/*--------------*/}

                        <input
                            placeholder="Email"    {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter a valid email',
                            },
                        })}
                            type="email"
                            required
                            className="input"
                        />

                        {errors.email &&<p>{errors. email.message}</p>}

                        {/*--------------*/}

                        <input
                            placeholder="telefoonummer"    {...register('telefoonummer', {
                            required: 'phone number is required',
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter a valid phone number',
                            },
                        })}
                            type="text"
                            required
                            className="input"
                        />

                        {errors.telefoonummer &&<p>{errors. telefoonummer.message}</p>}

                        {/*---------------*/}

                        <textarea id="subject"
                                  className="schrijven"
                                  placeholder="Schrijf iets .."
                                  {...register("subject")}
                        >

                        </textarea>

                        <button type="submit"
                                value="contact">verstuur</button>
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
                        <li><a href="#"><i className="fa-brands fa-youtube fa-1x"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-facebook fa-1x"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-twitter fa-1x"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-instagram-square fa-1x"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-snapchat-square fa-1x"></i></a></li>
                    </ul>
                </div>

            </section>

            <Footer/>

        </>
    );
}

export default Contact;