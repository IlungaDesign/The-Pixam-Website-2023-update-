import React, {useState} from 'react';
import TopMenu from "../../components/TopMenu";
import SearchBar from "../../components/SearchBar";
import FilterAside from "../../components/FilterAside";
import Footer from "../../components/Footer";
import TopMenu2 from '../../components/TopMenu2'
import './Home.css';
import GetImages2 from "../../components/GetImages2";

// const apiKey ="https://api.unsplash.com/photos?client_id=3sZuQtQVCljncB-BTL7BmeRQGDybQmsP28B4dOybwko"

function HomePage () {

    const [endPoint, setEndPoint] = useState('https://api.unsplash.com/photos?client_id=3sZuQtQVCljncB-BTL7BmeRQGDybQmsP28B4dOybwko');


    return (
        <div>
            <TopMenu/>
            <TopMenu2/>
            <SearchBar endPoint={endPoint} setEndPoint={setEndPoint}/>    {/*We create the Searchbar*/}

            <section className="container-main">     {/*we create a section which will contains the aside filter and the content_galerie*/}
                <FilterAside setEndPoint={setEndPoint}/>

                <GetImages2 endPoint={endPoint} setEndPoint={setEndPoint}/>
            </section>

            <Footer/>

        </div>

    );
}

export default HomePage;