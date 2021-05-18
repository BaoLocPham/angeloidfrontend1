// Import Libraries
import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
// Import Components
import Login from './Login';
import Signup from './Signup';
import Error from '../error/Error';

const Account = () => {
    return (
        <Switch>
            <Route path='/account/login'>
                <Login />
            </Route>

            <Route path='/account/signup'>
                <Signup />
            </Route>

            <Route path='*'>
                <Error />
            </Route>
        </Switch>
    );
}

export default Account;