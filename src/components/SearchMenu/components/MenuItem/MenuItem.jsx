import React from 'react';
import { Item } from './MenuItem.style';

const MenuItem = ({ category, clickHandler, disabled }) => {
    return (
        <Item onClick={() => clickHandler(category)} disabled={disabled}>
            {category}
        </Item>
    );
};

export default MenuItem;
