// import React, {useContext} from 'react';
// import TopMenu from "../../components/TopMenu";
import Footer from "../../components/Footer";
import './Login.css';
// import {Link} from "react-router-dom";
// import TopMenu2 from "../../components/TopMenu2";
import {useForm} from 'react-hook-form';
import {NavLink} from "react-router-dom";
import logo from "../../assets/pixam_logo9.png";
// import {AuthContext} from "../../context/AuthContext"
// import * as url from "url";
// import axios from "axios";


function Login () {

    // const {login} = useContext(AuthContext);

    // async function handleClick() {
    //     login();
    //
    // // loading State op true zetten voor het request
    //
    //     try {
    //     const result = await axios.post('http://localhost:3000/login', {
    //         username: "user",
    //         password: "123456",
    //     });
    //
    //     login (result.data.accesToken);
    // } catch (e) {
    //         console.error(e.response);
    //
    //         // de error in de error state zetten en die aan de gebruiker laten zien
    //     }
    //
    // // Loading state weer op false zetten
    //
    // }

    const { register, handleSubmit, formState:{errors} } = useForm();

    // function handelSubmit2(e) {
    //     e.preventDefault();
    //     login()
    // }

    function onFormSubmit(data) {
        console.log(data);
    }

    console.log('Errors', errors);

    return (

        <>

            <nav className="navbar-start-page2">
                <NavLink to="/"><img src={logo} alt="logo-pixam" className="logo-pixam"/></NavLink>
                <ul className="login-register-button2">

                    <li>
                        <NavLink to="/register" className="hover-menu3"> Registreren</NavLink>
                    </li>

                </ul>

            </nav>

            <section className="section-login">

                <form
                    // onSubmit2 ={handelSubmit2}
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
                            // onClick={handleClick}
                    >
                            Inloggen
                        </button>

                    {/*--------------------------------------*/}

                </form>


            </section>

            <Footer/>
        </>
    );
}

export default Login;