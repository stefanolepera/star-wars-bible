import React from 'react';
import PropTypes from 'prop-types';
import { StyledMessage } from './Message.style';

const Message = ({ text }) => <StyledMessage>{text}</StyledMessage>;

Message.propTypes = {
    text: PropTypes.string
};

export default Message;
