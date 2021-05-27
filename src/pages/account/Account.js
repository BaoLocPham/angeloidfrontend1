// Import Libraries
import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
// Import Components
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import ChangePassword from './ChangePassword';
import Error from '../error/Error';

const Account = ({ isLogin }) => {
    return (
        <Switch>
            { isLogin ? "" : <>
                <Route path='/account/login'>
                    <Login />
                </Route>

                <Route path='/account/signup'>
                    <Signup />
                </Route>

                <Route path='/account/forgot'>
                    <ForgotPassword />
                </Route>

                <Route path='/account/change'>
                    <ChangePassword />
                </Route>
            </>}

            <Route path='*'>
                <Error />
            </Route>
        </Switch>
    );
}

export default Account;