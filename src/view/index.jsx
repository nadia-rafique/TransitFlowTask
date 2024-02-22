import React from 'react'
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import WhatWeDo from '../components/WhatWeDo';
import WhyUs from '../components/WhyUs';
import Transporting from '../components/Transporting';

const View = () => {
    return (
        <div>
            <Header />
            <HomePage />
            <WhatWeDo />
            <WhyUs />
            <Transporting />
        </div>
    )
}
export default View;