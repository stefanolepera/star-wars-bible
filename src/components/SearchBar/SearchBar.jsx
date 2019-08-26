import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../actions/fetchDataAction';
import { Input } from './SearchBar.style';
import { API_END_POINTS } from '../../constants/APIEndPoints';

const SearchBar = () => {
    const textInput = useRef(null);
    const dispatch = useDispatch();
    const [disabled, searchType, films] = useSelector(state => [
        state.bootstrap.filmsDataError,
        state.data.searchType,
        state.bootstrap.filmsData
    ]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        setSearchValue('');
        textInput.current.focus();
    }, [searchType]);

    useEffect(() => {
        if (films.length > 0) {
            dispatch(
                fetchData({
                    url: `${API_END_POINTS[searchType]}${searchValue}`,
                    fromSearch: true
                })
            );
        }
    }, [films, searchValue, dispatch, searchType]);

    const onChange = e => {
        setSearchValue(e.target.value);
    };

    return (
        <Input
            type="text"
            name="search"
            placeholder={searchType === 'Films' ? '' : `Search ${searchType}`}
            onChange={onChange}
            value={searchValue}
            disabled={disabled}
            ref={textInput}
            autoFocus
        />
    );
};

export default SearchBar;
