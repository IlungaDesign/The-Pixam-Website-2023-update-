import './FotoDetails.css';
import TopMenu from "../../components/TopMenu";
import TopMenu2 from "../../components/TopMenu2";
import SearchBar from "../../components/SearchBar";
import FilterAside from "../../components/FilterAside";
import Footer from "../../components/Footer";
// import blabla3 from '../../assets/blabla.png';
// import worker3 from '../../images/worker3.png';
// import GetImages2 from "../../components/GetImages2";
import {useParams} from "react-router-dom";       // (1) Ik importer {useParams} hier
import React, {useEffect, useState} from "react";
import axios from "axios";
import {saveAs} from 'file-saver'

function FotoDetails () {

    const [imagesGalery, setImagesGalery] = useState({})

    const { imageId } = useParams();      //(2) Ik schrijf de useParams functie, hier met de id 'imageId' die ik in App.js heb geroepen. Deze id moet hetzelfde zijn als die van de Route.

useEffect(() => {
    async function fetchData() {
        try {
            const result = await axios.get(`https://api.unsplash.com/photos/${imageId}?client_id=3sZuQtQVCljncB-BTL7BmeRQGDybQmsP28B4dOybwko`);
            console.log(result.data);
            setImagesGalery(result.data);
        } catch (e) {
            console.error(e);
        }
    }
    fetchData()
},[])

    const downloadImage = () => {
        saveAs(`${imagesGalery.urls.full}`)
    }

    return (

        <div>
            <TopMenu/>     {/*We create the TopMenu*/}
            <TopMenu2/>
            <SearchBar/>    {/*We create the Searchbar*/}
            <section className="container-main">     {/*we create a section which will contains the aside filter and the content_galerie*/}
                <FilterAside/>

                {Object.keys(imagesGalery).length > 0 &&
                <div className="section-foto-Details">

                    <div className="foto-details">
                        <img src={imagesGalery.urls.full} alt="blabla3" className="blabla3"/>
                    </div>

                    <div className="section-information-foto-details">
                        <div className="section-insta-name">
                            <img src={imagesGalery.user.profile_image.large} alt="worker3" className="section-foto-details-worker3"/>
                            <div className="text-information">
                                <h1>{imagesGalery.user.name}</h1>
                                <p className="insta-text">@{imagesGalery.user.instagram_username}</p>
                            </div>
                            <div  className="unsplash-info-likes">
                                <i className="fa-solid fa-heart fa-2x"></i>
                                {imagesGalery.likes}
                            </div >
                        </div>
                        <button type="button" onClick={downloadImage} className="button-download-fotodetails">Downloaden</button>
                    </div>
                    {/*(4) Hier geef ik aan wat ik wil laten zien, welke data ik wil renderen*/}
                </div>
                }

            </section>
            <Footer/>     {/*  we create the footer here*/}
        </div>
    );
}

export default FotoDetails;
