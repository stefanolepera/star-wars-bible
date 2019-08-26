import React from 'react';
import { useSelector } from 'react-redux';
import { ResultItem } from '../';
import { Message, Spinner } from './components';
import { getDetails, getFilmsByResult } from '../../utils/FilterData';
import { Messages } from '../../constants/Locale';
import { ResultsWrapper } from './Results.style';

const Results = () => {
    const [
        results,
        searchType,
        count,
        isFromSearch,
        isLoading,
        isError,
        films,
        filmsError
    ] = useSelector(state => [
        state.data.queryData,
        state.data.searchType,
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
        <ResultsWrapper>
            {results.length > 0 &&
                results.map((result, index) => (
                    <ResultItem
                        key={index}
                        name={result.name}
                        details={getDetails(result, searchType)}
                        films={getFilmsByResult(result, films)}
                    />
                ))}
            {isLoading && <Spinner />}
        </ResultsWrapper>
    );
};

export default Results;
