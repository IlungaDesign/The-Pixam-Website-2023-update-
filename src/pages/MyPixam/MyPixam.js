import React from 'react';
import TopMenu from "../../components/TopMenu";
import './MyPixam.css';
import Footer from "../../components/Footer";
// import uploadPicture from "../images/icon_picture_upload5.png"
// import fotoOurHistory from "../images/employer.png";
import {Link} from 'react-router-dom';


function MyPixam () {
    return (
        <>
            <TopMenu/>

            <div className="my-pixam">

                <section className="section-register">

                    <div className="profiel-gegevens">
                        <h1>Gegevens van mijn profiel</h1>

                        <form className="#">
                            <div>
                                <label>Gebruikersnaam:</label>
                                <input type="password"
                                       placeholder="Je wachtwoord..."
                                       name="psw"
                                       id="psw" required/>
                            </div>

                            <div>
                                <label htmlFor="myFile">Profiel afbeelding:</label>
                                {/*<img src={uploadPicture}/>*/}
                                <input type="file" id="myFile"  name="filename" />

                            </div>

                            <div>
                                <label htmlFor="gender">Gelieve te kiezen</label>
                                <select id="gender" name="gender">
                                    <option value="man">Man</option>
                                    <option value="woman">Vrouw</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="firstName">Voornaam:</label>
                                <input type="text" id="firstName"
                                       placeholder="Schrijf je voornaam..."
                                       name="firstname"/>
                            </div>

                            <div>
                                <label htmlFor="lastName">Achternaam:</label>
                                <input type="text" id="lastName"
                                       placeholder="Schrijf je achternaam..."
                                       name="lastName"/>
                            </div>

                            <div>
                                <label htmlFor="city">Woonplaats:</label>
                                <input type="text" id="city"
                                       placeholder="Schrijf je woonplaats..."
                                       name="city"/>
                            </div>

                            <div>
                                <label htmlFor="birthday">Gebroortedatum:</label>
                                <input type="date" id="birthday" name="birthday"/>
                            </div>
                        </form>

                    </div>

                    <div className="profiel-online">

                        <h1>Online profiel</h1>

                        <form className="form-profiel-online">
                            <div>
                                <label>Facebook:</label>
                                <input type="text"
                                       placeholder="www.facebook.com..."
                                       name="facebook-register"
                                       id="facebook-register" required/>
                            </div>

                            <div>
                                <label>Youtube:</label>
                                <input type="text"
                                       placeholder="www.youtube.com..."
                                       name="youtube-register"
                                       id="youtube-register" required/>
                            </div>

                            <div>
                                <label>Instagram:</label>
                                <input type="text"
                                       placeholder="www.instagram.com..."
                                       name="instagram-register"
                                       id="instagram-register" required/>
                            </div>

                            <div>
                                <label>Twitter:</label>
                                <input type="text"
                                       placeholder="www.twitter.com..."
                                       name="twitter-register"
                                       id="twitter-register" required/>
                            </div>

                            <div>
                                <label>Je website:</label>
                                <input type="text"
                                       placeholder="www...Je website..."
                                       name="website-register"
                                       id="website-register" required/>
                            </div>

                            <div>
                                <label htmlFor="city">Woonplaats:</label>
                                <input type="text" id="city"
                                       placeholder="Schrijf je woonplaats..."
                                       name="city"/>
                            </div>

                            <h1>Optie</h1>

                            <div>
                                <label htmlFor="e-mail-wijzigen">Je e-mail wijzigen:</label>
                                <input type="text" id="e-mail-wijzigen"
                                       placeholder="Je e-mail..."
                                       name="e-mail-wijzigen"/>
                            </div>

                            <div className="profiel-online-social-media">
                                <label htmlFor="lastName">Registreren met:</label>
                                <Link to="#">Facebook</Link>
                                <Link to="#" >Google</Link>
                            </div>

                            <div>
                                <label htmlFor="wachtwoord">Je wachtwoord:</label>
                                <input type="password"
                                       placeholder="Je wachtwoord..."
                                       name="psw"
                                       id="psw" required/>
                            </div>

                            <div>
                                <label htmlFor="wachtwoord">Herhaal je wachtwoord:</label>
                                <input type="password"
                                       placeholder="Je wachtwoord herhalen..."
                                       name="psw"
                                       id="psw" required/>
                            </div>


                        </form>

                    </div>

                </section>

                <button type="submit"
                        value="registreren">Registreren
                </button>

            </div>

            <Footer/>

        </>
    );
}

export default MyPixam;