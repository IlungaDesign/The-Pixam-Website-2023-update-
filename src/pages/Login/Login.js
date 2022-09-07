import React from 'react';
import TopMenu from "../../components/TopMenu";
import Footer from "../../components/Footer";
import './Login.css';
import {Link} from "react-router-dom";
import TopMenu2 from "../../components/TopMenu2";
import {useForm} from 'react-hook-form';


function Login () {

    const { register, handleSubmit, formState:{errors} } = useForm();

    function onFormSubmit(data) {
        console.log(data);
    }

    console.log('Errors', errors);

    return (

        <>
            <TopMenu/>
            <TopMenu2/>


            <section className="section-login">

                <form action="#"
                      className="left-form"
                      onSubmit={handleSubmit(onFormSubmit)}>

                        <h1>Inloggen</h1>
                        <h>Login als je je een account hebt</h>

                        <a href="/my-pixam" className="facebook-button-registration">
                            <i className="fa-brands fa-facebook "></i>
                            Ga verder met facebook
                        </a>

                        <a href="/my-pixam" className="google-button-registration">
                            <i className="fa-brands fa-google"></i>
                            Ga verder met Google
                        </a>

                        <input
                        {...register('emailLogin', {
                        required: 'Email is verplicht',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Je moet een geldige email invoeren',
                        },
                        })}
                        type="email"
                        placeholder="Jouw email.."
                        id="j-email2"
                        className="email-login-page"
                        />

                        {errors.emailLogin && <p className="errors-message-login-page">{errors.emailLogin.message}</p>}

                    {/*---------------------------------------------------*/}

                        <input type="password"
                           placeholder="Jouw wachtwoord.."
                           id="j-email2"
                           className="password-login-page"
                           name="password-login-page"

                    {...register("password", {
                        required: "Wachtwoord is verplicht",
                        pattern: {
                            value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])./,
                            message: "Wachtwoord moet tenminste 1 nummer, " +
                                "1 letter and 1 speciaal karakter"
                        },
                        minLength: {
                            value: 5,
                            message: "Naam moet minimaal 5 karakters bevatten"
                        },
                    })}
                    />

                    {errors.password && <p className="errors-message-login-page">
                        {errors.password.message}</p>}

                    {/*---------------------------------------*/}

                    <button type="submit"
                                value="login"
                                className="button-login-left-form"
                        >
                            Inloggen
                        </button>

                    {/*--------------------------------------*/}

                </form>


                <form action="#" className="right-form">
                        <h1>Registreren</h1>
                        <h>Schijf in als je nog geen account hebt</h>

                        <a href="/my-pixam" className="facebook-button-registration"><i className="fa-brands fa-facebook "></i>
                            Ga verder met facebook
                        </a>

                        <a href="/my-pixam" className="google-button-registration"><i className="fa-brands fa-google"></i>
                            Ga verder met Google
                        </a>

                        <input type="text"
                               placeholder="Jouw naam.."
                               className="name-login2-page"
                               id="j-naam-login"

                    {...register("nameLogin", {
                        required: "Naam is verplicht",
                    })}
                    />

                    {errors.nameLogin && <p className="errors-message-login-page">
                        {errors.nameLogin.message}</p>}

                    {/*----------------------------------------*/}


                    <input type="email"
                           placeholder="Jouw email.."
                           id="j-email2"
                           className="email-login2-page"
                    {...register('emailLogin2', {
                        required: 'Email is verplicht',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Je moet een geldige email invoeren',
                        },
                    })}
                    />

                    {errors.emailLogin2 && <p className="errors-message-login-page">
                        {errors.emailLogin2.message}</p>}

                    {/*--------------------------------------*/}


                        <input type="password"
                           placeholder="Jouw wachtwoord.."
                           id="j-email2"
                           className="password-login2-page"

                    {...register("password2", {
                        required: "Wachtwoord is verplicht",
                        pattern: {
                            value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])./,
                            message: "Wachtwoord moet tenminste 1 nummer, 1 letter and 1 speciaal karakter"
                        },
                        minLength: {
                            value: 5,
                            message: "Naam moet minimaal 5 karakters bevatten"
                        },
                    })}
                    />

                    {errors.password2 && <p className="errors-message-login-page">
                        {errors.password2.message}</p>}

                    {/*--------------------------------------*/}

                        <p className="text-checkbox-register-page">
                            Minimaal 8 tekens (verplicht)<br/>
                            Voeg een nummer toe (verplicht)<br/>
                            Minimaal één hoofdletter<br/>
                            Voeg een symbool toe
                        </p>

                    {/*--------------------------------------*/}

                        <div className="check-box-items">
                               <input type="checkbox"
                               className="checkbox-register-page"
                               id="terms-and-conditions"
                               value="check"

                            {...register("checkboxRegister", {
                                required: "Je moet akkoord gaan met de voorwaarden",
                            })}
                            />

                            <label>Ik ga mee akkoord met de algemene
                                   <br/>voorwaarden
                               </label>

                        </div>

                    {errors.checkboxRegister && <p className="errors-message-login-page2">{errors.checkboxRegister.message}</p>}


                    {/*--------------------------------------*/}

                        <button type="submit"
                                className="button-register-right-form"
                                value="login">Registreren
                        </button>

                </form>

            </section>

            <Footer/>
        </>
    );
}

export default Login;