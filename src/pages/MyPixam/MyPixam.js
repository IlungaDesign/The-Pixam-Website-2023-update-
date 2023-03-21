import React from 'react';
import TopMenu from "../../components/TopMenu/TopMenu";
import TopMenu2 from "../../components/TopMenu2/TopMenu2";
import './MyPixam.css';
import Footer from "../../components/Footer/Footer";
import {Link} from 'react-router-dom';
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

                    <div className="profiel-online">

                        <h1>Mijn inloggegevens wijzigen</h1>

                        <form className="form-profiel-online" onSubmit={handleSubmit(onFormSubmit)}>

                            <div>
                                <label htmlFor="city">Naam:</label>
                                <input type="text" id="name"
                                       placeholder="Name..."
                                       name="city"/>
                            </div>

                            <div>
                                <label htmlFor="e-mail-wijzigen">Je e-mail wijzigen:</label>
                                <input type="text" id="e-mail-wijzigen"
                                       placeholder="Je e-mail..."
                                       name="e-mail-wijzigen"/>
                            </div>

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

                            <div className="profiel-online-social-media">
                                <label htmlFor="lastName">Registreren met:</label>
                                <Link to="#" className="facebook-button-mypixam">Facebook</Link>
                                <Link to="#" className="google-button-mypixam">Google</Link>
                            </div>


                        </form>

                    </div>

                </section>

                <button type="submit"
                        value="registreren">
                    Opslaan
                </button>

            </div>

            <Footer/>

        </>
    );
}

export default MyPixam;