import React from 'react';
import Footer from "../../components/Footer/Footer";
import './RegisterPage.css';
import {Link} from "react-router-dom";
import {useForm} from 'react-hook-form';
import {NavLink, useHistory} from "react-router-dom";
import logo from "../../assets/pixam_logo9.png";
import axios from "axios";


function RegisterPage () {

    const { register, handleSubmit, formState:{errors} } = useForm();

    const history = useHistory()

    async function onFormSubmit(data) {

        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                username: data.username,
                email:data.email,
                password: data.password,
            });

        history.push('/login')

            console.log(result.data)

            console.log(data)

        } catch (e) {
            console.error(e.response);

        }
    }

    console.log('Errors', errors);

    return (

        <>
            <nav className="navbar-start-page3">
                <NavLink to="/"><img src={logo} alt="logo-pixam" className="logo-pixam"/></NavLink>
                <ul className="register-register-button3">

                    <li>
                        <NavLink to="/login" className="hover-menu4"> Login</NavLink>
                    </li>

                </ul>

            </nav>

            <section className="section-login2">

                <form action="#"
                      className="right-form"
                      onSubmit={handleSubmit(onFormSubmit)}>

                    <h1>Registreren</h1>
                    <h>Schijf in als je nog geen account hebt</h>

                    <Link to="/my-pixam" className="facebook-button-registration"><i className="fa-brands fa-facebook "></i>
                        Ga verder met facebook
                    </Link>

                    <Link to="/my-pixam" className="google-button-registration"><i className="fa-brands fa-google"></i>
                        Ga verder met Google
                    </Link>

                    <input type="text"
                           placeholder="Jouw naam.."
                           className="name-login2-page"
                           id="#"

                           {...register("username", {
                               required: "Naam is verplicht",
                           })}
                    />

                    {errors.username && <p className="errors-message-login-page">
                        {errors.username.message}</p>}

                    {/*----------------------------------------*/}


                    <input type="email"
                           placeholder="Jouw email.."
                           id="#"
                           className="email-login2-page"
                           {...register('email', {
                               required: 'Email is verplicht',
                               pattern: {
                                   value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                   message: 'Je moet een geldige email invoeren',
                               },
                           })}
                    />

                    {errors.email && <p className="errors-message-login-page">
                        {errors.email.message}</p>}

                    {/*--------------------------------------*/}


                    <input type="password"
                           placeholder="Jouw wachtwoord.."
                           id="#"
                           className="password-login2-page"

                           {...register("password", {
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

                    {errors.password && <p className="errors-message-login-page">
                        {errors.password.message}</p>}

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
                               id="#"
                               value="check"

                               {...register("checkboxRegister", {
                                   required: "Je moet akkoord gaan met de voorwaarden",
                               })}
                        />

                        <label className="ik-ga-akkoord">Ik ga mee akkoord met de algemene
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

export default RegisterPage;