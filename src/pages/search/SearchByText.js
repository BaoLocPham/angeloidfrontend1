import React from 'react';
import TextFilter from './TextFilter';
import SearchTagList from './SearchTagList';
import SearchResult from './SearchResult';

const SearchByText = () => {
    return (
        <div>
            <TextFilter />
            <SearchTagList />
            <SearchResult />
        </div>
    );
}

export default SearchByText;