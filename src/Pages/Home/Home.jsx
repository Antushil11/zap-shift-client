import React from 'react';
import Banner from './Banner/Banner';
import Brands from './Brands/Brands';
import Reviews from './Reviews/Reviews';
import Work from './Work/Work';
import OurServices from './OurServices/OurServices';
import CallCenterSupport from './CallCenterSupport/CallCenterSupport';


const reviewsPromise = fetch('/reviews.json').then(res => res.json())

const Home = () => {
    return (
        <div className='min-h-screen '>
            <Banner></Banner>
            <Work></Work>
            <OurServices></OurServices>
            <Brands></Brands>
            <CallCenterSupport></CallCenterSupport>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>

        </div>
    );
};

export default Home;