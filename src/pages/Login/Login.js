import React from 'react';
import TopMenu from "../../components/TopMenu";
import Footer from "../../components/Footer";
import './Login.css';
import {Link} from "react-router-dom";


function Login () {
    return (

        <>
            <TopMenu/>

            <section className="section-login">

                <form action="#" className="left-form">
                    <div>
                        <h1>Inloggen</h1>
                        <h>Login als je je een account hebt</h><br/>

                        <Link to="/my-pixam" ><i className="fa-brands fa-facebook "></i>
                            Ga verder met facebook
                        </Link>

                        <Link to="/my-pixam" ><i class="fa-brands fa-google"></i>
                            Ga verder met Google
                        </Link><br/>

                        <input type="text"
                               placeholder="Jouw naam.."
                               className="jouw-naam-login"
                               id="j-naam-login"
                               name="name-login"/>

                        <input type="text"
                               placeholder="E-mail adres.."
                               id="j-email2"
                               className="jouw-email2"
                               name="email-login"/><br/>

                        <button type="submit"
                                value="login">Inloggen</button>

                    </div>

                </form>


                <form action="#" className="right-form">
                    <div>
                        <h1>Registreren</h1>
                        <h>Schijf in als je nog geen account hebt</h>
                        <br/>

                        <Link to="/my-pixam"><i className="fa-brands fa-facebook "></i>
                            Ga verder met facebook
                        </Link>

                        <Link to="/my-pixam"><i className="fa-brands fa-google"></i>
                            Ga verder met Google
                        </Link><br/>

                        <input type="text"
                               placeholder="Jouw naam.."
                               className="jouw-naam-login"
                               id="j-naam-login"
                               name="name-login"/>

                        <input type="text"
                               placeholder="E-mail adres.."
                               id="j-email2"
                               className="jouw-email2"
                               name="email-login"/>

                        <input type="password"
                               placeholder="Je wachtwoord..."
                               name="psw"
                               id="psw" required/>

                        <p>Minimaal 8 tekens (verplicht)<br/>
                            Voeg een nummer toe (verplicht)<br/>
                            Minimaal één hoofdletter<br/>
                            Voeg een symbool toe</p>

                        <input className="terms-and-conditions"
                               id="terms-and-conditions"
                               type="checkbox"
                               value="check"
                               name="checkbox"/><br/>

                        <label>Ik ga mee akkoord met de algemene<br/> voorwaarden</label>

                        <button type="submit"
                                value="login">Registreren
                        </button>

                    </div>

                </form>

            </section>

            <Footer/>
        </>
    );
}

export default Login;