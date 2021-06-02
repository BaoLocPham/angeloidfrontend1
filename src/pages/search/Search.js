// Import Libraries
import React, { useEffect } from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
// Import Components
import SearchByText from './SearchByText';
import SearchByImage from './SearchByImage';
import Error from '../error/Error';

const Search = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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