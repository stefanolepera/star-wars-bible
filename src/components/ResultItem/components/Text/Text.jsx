import React from 'react';
import PropTypes from 'prop-types';
import { StyledText } from './Text.style';

const Text = ({ text }) => <StyledText>{text}</StyledText>;

Text.propTypes = {
    text: PropTypes.string
};

export default Text;
