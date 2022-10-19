import React, {useContext} from 'react';
// import TopMenu from "../../components/TopMenu";
import Footer from "../../components/Footer";
import './Login.css';
// import {Link} from "react-router-dom";
// import TopMenu2 from "../../components/TopMenu2";
import {useForm} from 'react-hook-form';
import {NavLink, useHistory} from "react-router-dom";
import logo from "../../assets/pixam_logo9.png";
import {AuthContext} from "../../context/AuthContext"
// import * as url from "url";
import axios from "axios";


function Login () {

    const history= useHistory()

    const { register, handleSubmit, formState:{errors} } = useForm();

    const {login} = useContext(AuthContext);

    async function onFormSubmit(data) {

    // loading State op true zetten voor het request

        try {
        const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
            username: data.username,
            password: data.password,
        });

        login (result.data.accessToken);
            console.log(result.data)

            console.log(data)

            history.push('/home-page')

    } catch (e) {
            console.error(e);

            // de error in de error state zetten en die aan de gebruiker laten zien
        }

    // Loading state weer op false zetten

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
                      className="left-form"
                      onSubmit={handleSubmit(onFormSubmit)}>

                        <h1>Inloggen</h1>
                        <h6>Login als je je een account hebt</h6>

                        <a href="/my-pixam" className="facebook-button-registration">
                            <i className="fa-brands fa-facebook "></i>
                            Ga verder met facebook
                        </a>

                        <a href="/my-pixam" className="google-button-registration">
                            <i className="fa-brands fa-google"></i>
                            Ga verder met Google
                        </a>

                    <input type="text"
                           placeholder="Jouw naam.."
                           className="name-login2-page"
                           id="j-naam-login"

                           {...register("username", {
                               required: "Naam is verplicht",
                           })}
                    />

                    {errors.username && <p className="errors-message-login-page">
                        {errors.username.message}</p>}

                    {/*---------------------------------------------------*/}

                        <input type="password"
                           placeholder="Jouw wachtwoord.."
                           id="j-email2"
                           className="password-login-page"

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


            </section>

            <Footer/>
        </>
    );
}

export default Login;