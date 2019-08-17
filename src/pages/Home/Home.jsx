import React from 'react';
import { Logo } from '../../components';

const Home = () => {
    return (
        <>
            <Logo />
            <p>{`check if new version ${Math.random()}`}</p>
        </>
    );
};

export default Home;
