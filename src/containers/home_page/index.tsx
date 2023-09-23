// import Slideshow from 'components/slideshow';
import React from 'react';
import FeatureList from './feature_list';
import Footer from './footer';
import Trusted from './trusted';
import Introduction from './introduction';
import Example from './example';
import Questions from './questions';

function HomePage() {
    //introduction // statistics on the number of users
    //FeatureList
    //feature example
    //Questions
    //footer
    return (
        <>
            <Introduction />
            {/* <Slideshow /> */}
            <Trusted />
            <Example />
            <FeatureList />
            <Questions />
            <Footer />
        </>
    );
}

export default HomePage;
