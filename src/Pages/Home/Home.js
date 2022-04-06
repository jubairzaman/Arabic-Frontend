import React from 'react';
import Fotter from './Components/Fotter/Fotter';
import Part2 from './Components/Part2/Part2';
import Part3 from './Components/Part3/Part3';
import Part4 from './Components/Part4/part4';
import Part5 from './Components/Part5/Part5';
import TopBanner from './Components/TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Part2></Part2>
            <Part3></Part3>
            <Part4></Part4>
            <Part5></Part5>
            <Fotter></Fotter>

        </div>
    );
};

export default Home;