import React, {useState} from 'react';
import TopMenu from "../../components/TopMenu/TopMenu";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterAside from "../../components/FilterAside/FilterAside";
import Footer from "../../components/Footer/Footer";
import TopMenu2 from '../../components/TopMenu2/TopMenu2'
import './Home.css';
import GetImages2 from "../../components/GetImages2/GetImages2";

function HomePage () {

    const [endPoint, setEndPoint] = useState('https://api.unsplash.com/photos?client_id=3sZuQtQVCljncB-BTL7BmeRQGDybQmsP28B4dOybwko');


    return (
        <div>
            <TopMenu/>
            <TopMenu2/>
            <SearchBar endPoint={endPoint} setEndPoint={setEndPoint}/>
            <section className="container-main">
            <FilterAside setEndPoint={setEndPoint}/>
                <GetImages2 endPoint={endPoint} setEndPoint={setEndPoint}/>
            </section>
            <Footer/>
        </div>
    );
}

export default HomePage;