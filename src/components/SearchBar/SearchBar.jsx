import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../actions/fetchDataAction';
import { Input } from './SearchBar.style';

const SearchBar = () => {
    const dispatch = useDispatch();
    const disabled = useSelector(state => state.bootstrap.filmsDataError);
    const [character, setCharacter] = useState('');

    useEffect(() => {
        dispatch(fetchData(character));
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
            disabled={disabled}
            autoFocus
        />
    );
};

export default SearchBar;
