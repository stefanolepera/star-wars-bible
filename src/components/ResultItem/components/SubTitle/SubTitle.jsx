import React from 'react';
import PropTypes from 'prop-types';
import { StyledSubTitle } from './SubTitle.style';

const SubTitle = ({ subTitle }) => <StyledSubTitle>{subTitle}</StyledSubTitle>;

SubTitle.propTypes = {
    subTitle: PropTypes.string
};

export default SubTitle;
