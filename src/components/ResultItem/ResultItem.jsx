import React from 'react';
import PropTypes from 'prop-types';
import {
    MainWrapper,
    ContentWrapper,
    DetailsWrapper
} from './ResultItem.style';
import { Title, SubTitle } from './components';
import { formatDetail } from '../../utils/FilterData';

const ResultItem = ({ characterName, characterDetails, characterFilms }) => (
    <MainWrapper>
        <Title title={characterName} />
        <hr />
        <ContentWrapper>
            <DetailsWrapper>
                <SubTitle subTitle="Details" />
                {characterDetails.map((detail, index) => (
                    <div key={index}>
                        {formatDetail(detail[0])} : {detail[1]}
                    </div>
                ))}
                <hr />
            </DetailsWrapper>
            <DetailsWrapper>
                <SubTitle subTitle="Films" />
                {characterFilms.map((film, index) => (
                    <div key={index}>{film}</div>
                ))}
            </DetailsWrapper>
        </ContentWrapper>
    </MainWrapper>
);

ResultItem.propTypes = {
    characterName: PropTypes.string,
    characterDetails: PropTypes.arrayOf(PropTypes.array),
    characterFilms: PropTypes.arrayOf(PropTypes.string)
};

export default ResultItem;
