import React from 'react';
import About from '../../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Services from '../Services/Services';
import Videos from '../Videos/Videos';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Blog></Blog>
            <Videos></Videos>
        </div>
    );
};

export default Home;