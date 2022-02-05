import React from 'react'
import Footer from '../modules/footer';
import ShowCatalog from '../modules/showcatalog';
import Newsletter from '../modules/newsletter';

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
