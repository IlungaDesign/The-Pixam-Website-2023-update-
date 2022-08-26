import React from 'react';
import TopMenu from "../../components/TopMenu";
// import {Link} from 'react-router-dom';
import './OverOns.css';
import Footer from "../../components/Footer";
import fotoOurHistory from "../../images/employer.png"
import iconExcellence from "../../images/image_excellence.png"
import iconCollaboration from "../../images/image_collaboration3.png"
import iconResponsability from "../../images/image_responsability2.png"
import iconTransparency from "../../images/image_transparency2.png"
import worker1 from "../../images/worker1.png"
import worker2 from "../../images/worker2.png"
import worker3 from "../../images/worker3.png"
import valuePicture from "../../images/findfitness_foto3.png"

function OverOns () {
    return (
        <>
            <TopMenu/>

            <section className="section-baner">
                <h1>Pixam biedt u de mogelijkheid <br/>
                    om gratis afbeeldingen naar <br/>
                    keuze te downloaden</h1>

                <button type="button"><a href="/">
                    Probeer maar eens</a></button>
            </section>

            <section className="section-identity">
                <h1>Waarom zijn wij hier?</h1>

                <p>We moeten in dit aardse leven aanvaarden dat het af en toe een klein
                    beetje lastig kan zijn. Een klein beetje, liefst niet te veel. Maar we
                    hebben het moeilijk met de kleine lastigheden van het gewone leven.
                    We lijken niet te kunnen accepteren dat het dagelijkse leven af en toe
                    een klein beetje gewoon en een klein beetje verdrietig is.

                    Voorheen konden we uitkijken naar een hemel na dit leven, waar het leven
                    goed zou zijn. Deze hemel is afgeschaft, dat paste niet meer in de
                    begroting. Nu willen wij zonodig de hemel hier. Met onze westerse
                    hoogmoed denken we ook dat we deze hemel kunnen maken, produceren of
                    zelfs kunnen kopen. Dat lijkt me een meritocratische vergissing: dat we
                    dat kunnen grijpen. </p>
            </section>

            <section className="section-history">

                <img src={fotoOurHistory} alt="foto_history"/>

                <div className="text-history">
                    <h>OUR HISTORY</h>
                    <h1>Once upon a time…</h1>

                    <p>Once upon a time… Sylwia and Paweł Rogowicz lived and worked in Tampere for
                        over 4 years. After working with countless large Finnish enterprises and gaining
                        experience in agile working methods of software development companies, they decided
                        that it was time to build something on their own.

                        When Sylwia and Paweł returned to Poland in 2008, they founded Espeo with the idea to
                        take the innovative practices from Finland into their company culture and core working methods.
                        They combined the Finnish attachment to agile work and attention to usability with Polish
                        software development talent.

                        Our team at Espeo Software has always been focused on creating amazing experiences and
                        delivering customized IT systems that make our clients market leaders. Managing Director of
                        Espeo Finland, Aki Inkeroinen, joined in 2015 after working in the Finnish IT industry for more
                        than 20 years at companies like Dell and IBM. He co-founded our daughter company Espeo Software
                        Oy and together with the rest of the team in Finland, he continues to build Espeo’s presence in
                        the Nordics.</p>

                </div>

            </section>

            <section className="section-value-text">

                <div className='text-left'>
                    <h>OUR VALUES</h>
                    <h1>We follow values that shape our activities.</h1>
                </div>

                <div className='text-right'>
                    <p><strong>No matter how many projects we deliver,</strong>
                        our core values always stay the same. Our values are the
                        heart of our culture, this is how we want to be perceived
                        by our clients and co-workers. It is our way on how we
                        measure the individual sense of accomplishment.</p>
                </div>

            </section>

            <section className="section-value-icons">
                <div >
                    <img src={iconExcellence} alt="icon_excellence"/>
                    <h1>Excellence</h1>
                    <p>We exceed the expectations of <br/> clients and coworkers.</p>
                </div>

                <div >
                    <img src={iconCollaboration} alt="icon_collaboration"/>
                    <h1>Collaboration</h1>
                    <p>We exceed the expectations of <br/> clients and coworkers.</p>
                </div>

                <div >
                    <img src={iconResponsability} alt="icon_responsability"/>
                    <h1>Responsability</h1>
                    <p>We exceed the expectations of <br/> clients and coworkers.</p>
                </div>

                <div >
                    <img src={iconTransparency} alt='icon_transparency'/>
                    <h1>Transparency</h1>
                    <p>We exceed the expectations of <br/> clients and coworkers.</p>
                </div>

            </section>

            <section className="section-our-team">
                <h>Our Team</h>

                <div className="our-team">
                    <div>
                        <img src={worker1} alt="image_worker1"/>
                        <h1>Anita Pouls</h1>
                        <p>project coördinator</p>
                    </div>

                    <div>
                        <img src={worker2} alt="image_worker2"/>
                        <h1>Antony Sherman</h1>
                        <p>Back-end developer</p>
                    </div>

                    <div>
                        <img src={worker3} alt="image_worker3"/>
                        <h1>Michael Ilunga</h1>
                        <p>Front-end developer</p>
                    </div>
                </div>
            </section>

            <section className="creating-value">
                <div>
                    <h>WAT WE DO</h>

                    <h1>Creating value</h1>
                    <h2>through digital transformation</h2>

                    <p>Once upon a time… Sylwia and Paweł Rogowicz lived and worked in Tampere for
                        over 4 years. After working with countless large Finnish enterprises and gaining
                        experience in agile working methods of software development companies, they decided
                        that it was time to build something on their own.

                        When Sylwia and Paweł returned to Poland in 2008, they founded Espeo with the idea to
                        take the innovative practices from Finland into their company culture and core working methods.
                        They combined the Finnish attachment to agile work and attention to usability with Polish
                        software development talent.

                        Our team at Espeo Software has always been focused on creating amazing experiences and
                        delivering customized IT systems that make our clients market leaders. </p>
                </div>

                <img src={valuePicture} alt="value_picture"/>

            </section>

            <Footer/>

        </>


    );
}

export default OverOns;