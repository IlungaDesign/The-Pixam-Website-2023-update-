import React from 'react';
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

    return (
        <div>
            <TopMenu/>     {/*We create the TopMenu*/}
            <TopMenu2/>
            <SearchBar/>    {/*We create the Searchbar*/}

            <section className="container-main">     {/*we create a section which will contains the aside filter and the content_galerie*/}
                <FilterAside/>
                {/*<FilterAside2/>*/}
                {/*<GetImages/>*/}
                <GetImages2/>
                {/*<PhotoGalerie/>*/}
            </section>


            <Footer/>     {/*  we create the footer here*/}
        </div>

    );
}

export default HomePage;