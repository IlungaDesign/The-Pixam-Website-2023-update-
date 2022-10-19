import React, {useState} from 'react';
import TopMenu from "../../components/TopMenu";
import SearchBar from "../../components/SearchBar";
import FilterAside from "../../components/FilterAside";
// import FilterAside2 from "../../components/FilterAside2";
import Footer from "../../components/Footer";
// import FilterDropdown from "../../components/FilterDropdown";
import TopMenu2 from '../../components/TopMenu2'
import './Home.css';
// import GetImages from "../../components/GetImages";
import GetImages2 from "../../components/GetImages2";
// import StartPage from "../StartPage";
// import axios from 'axios'

// const apiKey ="https://api.unsplash.com/photos?client_id=3sZuQtQVCljncB-BTL7BmeRQGDybQmsP28B4dOybwko"

function HomePage () {

    const [endPoint, setEndPoint] = useState('https://api.unsplash.com/photos?client_id=3sZuQtQVCljncB-BTL7BmeRQGDybQmsP28B4dOybwko');

    const [query, setQuery] = useState('')

    return (
        <div>
            {console.log(endPoint,query)}
            <TopMenu/>     {/*We create the TopMenu*/}
            <TopMenu2/>
            <SearchBar endPoint={endPoint} setEndPoint={setEndPoint}
                       query={query} setQuery={setQuery}/>    {/*We create the Searchbar*/}

            <section className="container-main">     {/*we create a section which will contains the aside filter and the content_galerie*/}
                <FilterAside query={query} setQuery={setQuery}/>

                <GetImages2 endPoint={endPoint} setEndPoint={setEndPoint}
                            query={query} setQuery={setQuery}/>
            </section>


            <Footer/>     {/*  we create the footer here*/}
        </div>

    );
}

export default HomePage;