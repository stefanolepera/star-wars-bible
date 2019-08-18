import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../actions/fetchDataAction';
import { Input } from './SearchBar.style';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [character, setCharacter] = useState('');

    useEffect(() => {
        dispatch(fetchData(character));
        console.log('character', character);
    }, [character, dispatch]);

    const onChange = e => {
        setCharacter(e.target.value);
    };

    return (
        <Input
            type="text"
            name="character"
            placeholder="Search Character"
            onChange={onChange}
            value={character}
            autoFocus
        />
    );
};

export default SearchBar;
