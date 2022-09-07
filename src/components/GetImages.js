import React from 'react';
import './GetImages.css';
import {useState, useEffect} from "react";
import Image from "./Image";
// import axios from 'axios';

// const apiKey = 'd85e6262984729404acc4eb353f4';

function GetImages () {

    const [images, setImages] = useState([])

    useEffect(() => {
        const fetchImages = async () => {
        const response = await fetch('https://api.unsplash.com/photos/?client_id=3sZuQtQVCljncB-BTL7BmeRQGDybQmsP28B4dOybwko');
        const data = await response.json()
        setImages(data)
            console.log(data)
    }
    fetchImages()
},[])

    return (

        <>
            {!images ? <h2 className="flex">Loading...</h2> :
                <section>
                    <h1 className="section-image-getImages">Recommended for you... </h1>

                    <div className="items-images-getImages">
                        {images.map((image)=>
                            (<Image key={image.id} {...image}/>
                            ))}
                    </div>
                </section>
            }
        </>

    );
}

export default GetImages ;

