import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bootstrapApplication } from '../../actions/bootstrapAction';
import { Logo, SearchBar, Results } from '../../components';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(bootstrapApplication());
    }, [dispatch]);

    return (
        <>
            <Logo />
            <SearchBar />
            <Results />
        </>
    );
};

export default Home;
