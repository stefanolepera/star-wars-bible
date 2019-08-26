import React from 'react';
import PropTypes from 'prop-types';
import {
    MainWrapper,
    ContentWrapper,
    DetailsWrapper
} from './ResultItem.style';
import { Title, SubTitle, Text } from './components';
import { formatDetail, trimDetail } from '../../utils/FilterData';

const ResultItem = ({ name, details, films }) => (
    <MainWrapper>
        <Title title={name} />
        <hr />
        <ContentWrapper>
            <DetailsWrapper>
                <SubTitle subTitle="Details" />
                {details.map((detail, index) => (
                    <Text
                        key={index}
                        text={`${formatDetail(detail[0])} : 
                        ${trimDetail(detail[1])}`}
                    />
                ))}
                <hr />
            </DetailsWrapper>
            <DetailsWrapper>
                <SubTitle subTitle="Films" />
                {films.map((film, index) => (
                    <Text key={index} text={film} />
                ))}
            </DetailsWrapper>
        </ContentWrapper>
    </MainWrapper>
);

ResultItem.propTypes = {
    name: PropTypes.string,
    details: PropTypes.arrayOf(PropTypes.array),
    films: PropTypes.arrayOf(PropTypes.string)
};

export default ResultItem;
