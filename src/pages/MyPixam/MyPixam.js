import React from 'react';
import TopMenu from "../../components/TopMenu";
import TopMenu2 from "../../components/TopMenu2";
import './MyPixam.css';
import Footer from "../../components/Footer";
// import uploadPicture from "../images/icon_picture_upload5.png"
// import fotoOurHistory from "../images/employer.png";
// import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';


function MyPixam () {

    const { register, handleSubmit, formState:{errors} } = useForm();

    function onFormSubmit(data) {
        console.log(data);
    }

    console.log('Errors', errors);

    return (
        <>
            <TopMenu/>
            <TopMenu2/>

            <div className="my-pixam">

                <section className="section-register">

                    <div className="profiel-gegevens">
                        <h1>Gegevens van mijn profiel</h1>

                        <form className="#" onSubmit={handleSubmit(onFormSubmit)}>

                            <div>
                                <label>Email:</label>
                                <input
                                    placeholder="Jouw email"
                                    {...register('emailMyPixam', {
                                        required: 'Email is verplicht',
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: 'Voer alstublieft een geldig email in',
                                        },
                                    })}
                                    type="email"
                                    required
                                    className="email-mypixam"
                                />

                                {errors.emailMyPixam &&<p className="errors-style">{errors. emailMyPixam.message}</p>}

                            </div>

                            {/*-------------------------------------------------*/}

                            <div>
                                <label>Wachtwoord:</label>
                                <input type="password"
                                       placeholder="Je wachtwoord..."
                                       id="psw" required
                                       className="password-mypixam"
                                       {...register("passwordMyPixam", {
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
                                {errors.passwordMyPixam && <p className="errors-style">
                                    {errors.passwordMyPixam.message}</p>}
                            </div>

                            {/*-------------------------------------------------*/}

                            <div>
                                <label htmlFor="myFile">Profiel afbeelding:</label>
                                <input type="file"
                                       id="myFile"
                                       className="upload-image-button"
                                       {...register("filenamePhoto", {
                                           required: "Het uploaden van een foto is verplicht",
                                       })}
                                />
                                {errors.filenamePhoto && <p>{errors.filenamePhoto.message}</p>}
                            </div>

                            {/*-------------------------------------------------*/}

                            <div>
                                <label htmlFor="gender">Gelieve te kiezen</label>
                                <select
                                    id="gender"
                                    name="gender"
                                >
                                    <option value="man">Man</option>
                                    <option value="woman">Vrouw</option>
                                </select>
                            </div>

                            {/*-------------------------------------------------*/}

                            <div>
                                <label htmlFor="firstName">Voornaam:</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="Schrijf je voornaam..."
                                    name="firstnameMypixam"
                                    {...register("name", {
                                        required: "Voornaam is verplicht",
                                        minLength: {
                                            value: 2,
                                            message: "Naam moet minimaal 2 karakters bevatten"
                                        },
                                    })}
                                />
                                {errors.firstnameMypixam && <p>{errors.firstnameMypixam.message}</p>}

                            </div>

                            {/*-------------------------------------------------*/}

                            <div>
                                <label htmlFor="lastName">Achternaam:</label>
                                <input type="text"
                                       id="lastName"
                                       className="lastname-my-pixam"
                                       placeholder="Schrijf je achternaam..."
                                {...register("lastNameMyPixam", {
                                    required: "Achternaam is verplicht",
                                    minLength: {
                                        value: 2,
                                        message: "Naam moet minimaal 2 karakters bevatten"
                                    },
                                })}
                                />
                                {errors.lastNameMyPixam && <p>{errors.lastNameMyPixam.message}</p>}
                            </div>

                            {/*-------------------------------------------------*/}

                            <div>
                                <label htmlFor="city">Woonplaats:</label>
                                <input type="text" id="city"
                                       placeholder="Schrijf je woonplaats..."
                                       name="city"/>
                            </div>

                            {/*-------------------------------------------------*/}

                            <div>
                                <label htmlFor="birthday">Gebroortedatum:</label>
                                <input type="date" id="birthday" name="birthday"/>
                            </div>

                            {/*-------------------------------------------------*/}

                            <button type="submit"
                                    value="registreren">Registreren
                            </button>
                        </form>

                    </div>

                    {/*-------------------------------------------------*/}

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

                            {/*-------------------------------------------------*/}

                            <div>
                                <label>Youtube:</label>
                                <input type="text"
                                       placeholder="www.youtube.com..."
                                       name="youtube-register"
                                       id="youtube-register" required/>
                            </div>

                            {/*-------------------------------------------------*/}

                            <div>
                                <label>Instagram:</label>
                                <input type="text"
                                       placeholder="www.instagram.com..."
                                       name="instagram-register"
                                       id="instagram-register" required/>
                            </div>

                            {/*-------------------------------------------------*/}

                            <div>
                                <label>Twitter:</label>
                                <input type="text"
                                       placeholder="www.twitter.com..."
                                       name="twitter-register"
                                       id="twitter-register" required/>
                            </div>

                            {/*-------------------------------------------------*/}

                            <div>
                                <label>Je website:</label>
                                <input type="text"
                                       placeholder="www...Je website..."
                                       name="website-register"
                                       id="website-register" required/>
                            </div>

                            {/*-------------------------------------------------*/}

                            <div>
                                <label htmlFor="city">Woonplaats:</label>
                                <input type="text" id="city"
                                       placeholder="Schrijf je woonplaats..."
                                       name="city"/>
                            </div>

                            <h1>Optie</h1>

                            {/*-------------------------------------------------*/}

                            <div>
                                <label htmlFor="e-mail-wijzigen">Je e-mail wijzigen:</label>
                                <input type="text" id="e-mail-wijzigen"
                                       placeholder="Je e-mail..."
                                       name="e-mail-wijzigen"/>
                            </div>

                            {/*-------------------------------------------------*/}

                            <div className="profiel-online-social-media">
                                <label htmlFor="lastName">Registreren met:</label>
                                <a href="#" className="facebook-button-mypixam">Facebook</a>
                                <a href="#" className="google-button-mypixam">Google</a>
                            </div>

                            {/*-------------------------------------------------*/}

                            <div>
                                <label htmlFor="wachtwoord">Je wachtwoord:</label>
                                <input type="password"
                                       placeholder="Je wachtwoord..."
                                       className="password2-mypixam"
                                       id="password2-mypixam2"
                                {...register("asswordMypixam2", {
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
                                {errors.passwordMypixam2 && <p className="errors-style">
                                    {errors.passwordMypixam2.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="wachtwoord">Herhaal je wachtwoord:</label>
                                <input type="password"
                                       placeholder="Je wachtwoord herhalen..."
                                       className="password-repeat-mypixam"
                                       id="password-repeat-mypixam2" required
                                {...register("passwordMypixamHerhalen", {
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
                                {errors.passwordMypixamHerhalen && <p className="errors-style">
                                    {errors.passwordMypixamHerhalen.message}</p>}
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