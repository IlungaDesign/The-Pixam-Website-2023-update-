import React, {useState, useEffect} from 'react';
import './GetImages2.css';
import axios from 'axios';
// import FotoDetails from "../pages/FotoDetails/FotoDetails";
import {Link} from 'react-router-dom';

function GetImages2 ({endPoint}) {

    const [imagesGalery, seImagesGalery] = useState('');

    useEffect(()=> {

        async function fetchData() {
            try {
                // const result = await axios.get(`https://api.unsplash.com/photos?client_id=3sZuQtQVCljncB-BTL7BmeRQGDybQmsP28B4dOybwko`);
                // const result = await axios.get('https://api.unsplash.com/search/photos?page=1&query=utrecht&client_id=3sZuQtQVCljncB-BTL7BmeRQGDybQmsP28B4dOybwko');
                const result = await axios.get(`${endPoint}`);

                if(endPoint === `https://api.unsplash.com/photos?client_id=3sZuQtQVCljncB-BTL7BmeRQGDybQmsP28B4dOybwko` ) {
                    seImagesGalery(result.data);
                }

                else{
                    seImagesGalery(result.data.results);
                }

                console.log(result.data);

            } catch (e) {
                console.error(e);
            }
        }
        fetchData()
        console.log("We gaan beginnen")
    },[endPoint])

    return (
        <>
            <div className="section-images">
                {imagesGalery &&

                <>
                    {imagesGalery.map((unsplashImage)=>{
                        return (

                            <div className="blabla2">
                                <Link to={`/foto-details/${unsplashImage.id}`}><img className="unsplash-Image" alt="unsplashImage" src={unsplashImage.urls.full}/></Link>
                                <div className="section-unsplash-info">
                                    <img className="unsplash-Image-profile"
                                         alt="unsplashImageProfile"
                                         src={unsplashImage.user.profile_image.large}/>
                                    <div>
                                        <h  className="unsplash-info-name">{unsplashImage.user.name}</h>
                                        <p  className="unsplash-image-info">@{unsplashImage.user.instagram_username}</p>
                                    </div>

                                    <div  className="unsplash-info-likes">
                                        <i className="fa-solid fa-heart fa-2x"></i>
                                        {unsplashImage.likes}
                                    </div >
                                </div>
                            </div>

                        )
                    })}
                </>
                }
            </div>

            <div className="footer-Afbeeldingen">

            </div>

            {/*<footer/>*/}

        </>

    );
}

export default GetImages2 ;
