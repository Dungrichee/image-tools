import Slideshow from 'components/slideshow';
import React from 'react';
import FeatureList from './feature_list';
import Footer from './footer';
import Trusted from './trusted';

function HomePage() {
    return (
        <>
            <Slideshow />
            <FeatureList />
            <Trusted />
            <Footer />
        </>
    );
}

export default HomePage;
