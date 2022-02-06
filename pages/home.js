import React from 'react'
import Footer from '../modules/footer/footer';
import ShowCatalog from '../modules/showcatalog/showcatalog';
import Newsletter from '../modules/newsletter/newsletter';

const Home = () => {
    return (
        <div>
            <ShowCatalog />
            <Newsletter />
            <Footer />

        </div>
    )
}

export default Home;
