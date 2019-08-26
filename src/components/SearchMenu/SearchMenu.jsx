import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MenuWrapper } from './SearchMenu.style';
import { MenuItem } from './components';
import { setSearchType } from '../../actions/fetchDataAction';
import { SEARCH_CATEGORIES } from '../../constants/Settings';

const SearchMenu = () => {
    const dispatch = useDispatch();
    const searchType = useSelector(state => state.data.searchType);
    const onCategoryClick = category => {
        dispatch(setSearchType(SEARCH_CATEGORIES[category]));
    };

    return (
        <MenuWrapper>
            {Object.values(SEARCH_CATEGORIES).map(category => (
                <MenuItem
                    key={category}
                    category={category}
                    disabled={searchType === category}
                    clickHandler={onCategoryClick}
                />
            ))}
        </MenuWrapper>
    );
};

export default SearchMenu;
