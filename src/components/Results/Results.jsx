import React from 'react';
import { useSelector } from 'react-redux';
import { ResultItem } from '../';
import { Message, Spinner } from './components';
import {
    getCharacterDetails,
    getFilmsByCharacter
} from '../../utils/FilterData';
import { Messages } from '../../constants/Locale';

const Results = () => {
    const [
        results,
        count,
        isFromSearch,
        isLoading,
        isError,
        films,
        filmsError
    ] = useSelector(state => [
        state.data.queryData,
        state.data.count,
        state.data.isFromSearch,
        state.data.isFetchingInProgress,
        state.data.isFetchingError,
        state.bootstrap.filmsData,
        state.bootstrap.filmsDataError
    ]);

    if (isLoading && isFromSearch) {
        return <Spinner />;
    }

    if (isError || filmsError) {
        return <Message text={Messages.fetchError} />;
    }

    if (count === 0) {
        return <Message text={Messages.notFound} />;
    }

    return (
        <>
            {results.map((character, index) => (
                <ResultItem
                    key={index}
                    characterName={character.name}
                    characterDetails={getCharacterDetails(character)}
                    characterFilms={getFilmsByCharacter(character, films)}
                />
            ))}
            {isLoading && <Spinner />}
        </>
    );
};

export default Results;
