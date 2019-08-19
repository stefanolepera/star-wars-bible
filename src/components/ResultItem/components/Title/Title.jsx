import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './Title.style';

const Title = ({ title }) => <StyledTitle>{title}</StyledTitle>;

Title.propTypes = {
    title: PropTypes.string
};

export default Title;
