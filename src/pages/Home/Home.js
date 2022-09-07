import React from 'react';
import TopMenu from "../../components/TopMenu";
import SearchBar from "../../components/SearchBar";
import FilterAside from "../../components/FilterAside";
import PhotoGalerie from "../../components/PhotoGalerie";
import Footer from "../../components/Footer";
// import FilterDropdown from "../../components/FilterDropdown";
import TopMenu2 from '../../components/TopMenu2'
import './Home.css';
import GetImages from "../../components/GetImages";

function HomePage () {
    return (
        <div>
            <TopMenu/>     {/*We create the TopMenu*/}
            <TopMenu2/>
            <SearchBar/>    {/*We create the Searchbar*/}
            {/*<FilterDropdown/>    /!*We create the FilterDropdown*!/*/}

            <section className="container-main">     {/*we create a section which will contains the aside filter and the content_galerie*/}
                <FilterAside/>
                <GetImages/>
                <PhotoGalerie/>
            </section>

            <Footer/>     {/*  we create the footer here*/}
        </div>

    );
}

export default HomePage;