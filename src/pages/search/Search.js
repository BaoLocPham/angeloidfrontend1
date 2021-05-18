// Import Libraries
import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
// Import Components
import SearchByText from './SearchByText';
import SearchByImage from './SearchByImage';
import Error from '../error/Error';

const Search = () => {
    return (
        <Switch>
            <Route path='/search' exact>
                <SearchByText />
            </Route>

            <Route path='/search/image'>
                <SearchByImage />
            </Route>

            <Route path='*'>
                <Error />
            </Route>
        </Switch>
    );
}

export default Search;