import './FotoDetails.css';
import TopMenu from "../../components/TopMenu/TopMenu";
import TopMenu2 from "../../components/TopMenu2/TopMenu2";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterAside from "../../components/FilterAside/FilterAside";
import Footer from "../../components/Footer/Footer";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {saveAs} from 'file-saver'

function FotoDetails () {

    const [imagesGalery, setImagesGalery] = useState({})

    const { imageId } = useParams();

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
    // eslint-disable-next-line
},[])

    const downloadImage = () => {
        saveAs(`${imagesGalery.urls.full}`)
    }

    return (

        <div>
            <TopMenu/>
            <TopMenu2/>
            <SearchBar/>
            <section className="container-main">
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

                </div>
                }

            </section>
            <Footer/>
        </div>
    );
}

export default FotoDetails;
