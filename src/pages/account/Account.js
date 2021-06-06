// Import Libraries
import React, {useEffect, useState} from 'react';
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

//Background image
import bg1 from './img/bg-01.jpg';
import bg2 from './img/bg-02.jpg';
import bg3 from './img/bg-03.jpg';
import bg4 from './img/bg-04.jpg';
import bg5 from './img/bg-05.jpg';
import bg6 from './img/bg-06.jpg';
import bg7 from './img/bg-07.jpg';
import bg8 from './img/bg-08.jpg';

const Account = ({ setUser,isLogin }) => {

    //Random variable to get image random
    const [random, setRandom] = useState();

    //List of image, author and link to author page
    const bg = {
        img : [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8],
        author: ["DSマイル", "三年B组のsanaeさん", "U35(うみこ)", "banishment", "T5", "しぐれうい", "三湊かおり", "藤原"],
        link: ["795196", "3990881", "337971", "23223750", "4819066", "431873", "12742306", "27517"]
    }

    const BackGround = {
        backgroundImage: `url(${bg.img[random]})`,
    }

    const Author = bg.author[random];

    const AuthorLink = `https://www.pixiv.net/en/users/${bg.link[random]}`;

    //When load the page scroll to top and random a number
    useEffect(() => {
        window.scrollTo(0, 0);
        setRandom((Math.floor(Math.random() * 7) + 1));
    }, [])

    return (
        <Switch>
                <Route path='/account/login'>
                    <Login 
                        setUser={setUser} 
                        isLogin={isLogin}
                        BackGround={BackGround}
                        Author={Author}
                        AuthorLink={AuthorLink}
                    />
                </Route>

                <Route path='/account/signup'>
                    <Signup 
                        BackGround = {BackGround}
                        Author = {Author}
                        AuthorLink = {AuthorLink}
                    />
                </Route>

                <Route path='/account/forgot'>
                    <ForgotPassword />
                </Route>

                <Route path='/account/change'>
                    <ChangePassword />
                </Route>
            <Route path='*'>
                <Error />
            </Route>
        </Switch>
    );
}

export default Account;