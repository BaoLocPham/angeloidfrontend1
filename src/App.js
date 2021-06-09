import './App.css';
// Import Libraries
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.css";
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

// Import Pages
import Nav from './pages/nav/Nav';
import Home from './pages/home/Home';
import AnimeDetail from './pages/animedetail/AnimeDetail'
import Search from './pages/search/Search';
import Account from './pages/account/Account';
import Setting from './pages/setting/Setting';
import Thread from './pages/thread/Thread';
import Error from './pages/error/Error';
import Footer from './pages/footer/Footer';

// using cookies
import { useCookies } from 'react-cookie';

const App = () => {
  // isLogin state
  const [isLogin, setIsLogin] = useState(true);
  // Cookies state
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  //user state
  const [user, setUser] = useState({});

  useEffect(() => {// call when start up website
    if (cookies.user == undefined) {// if there is no cookies
      setIsLogin(false);
    } else {
      // fetch user data
      fetch(
        `${process.env.REACT_APP_BACKEND_URL}api/user/${cookies.user.userId}`,
        {
          method: "GET",
          headers: { 'Content-Type': 'application/json'}
        }
      )
        .then(res => res.json())
        .then(res => {
          if (res.status != 404) {// if login success
            let expires = new Date()
            expires.setTime(expires.getTime() + (1000000000)); // set time expires of the cookies
            setUser(res);
            setCookie("user", { userId: res.userId, isAdmin: res.isAdmin }, { path: "/", expires: expires });
          }
        });
      user.userId === undefined ? setIsLogin(false) : setIsLogin(true);
    }
  }, []
  );

  useEffect(() => {// when change user state
    {
      user.userId === undefined ? setIsLogin(false) : setIsLogin(true);
    }
  }, [user]
  );

  const handleLogout = () => {// logout
    removeCookie("user");// remove cookies
    setIsLogin(false);
  }

  return (
    <Router>
      <div className="" style={{ width: "100vw" }}>
        <Nav isLogin={isLogin} handleLogout={handleLogout} user={user}/>

        {/* Choose pages to render */}
        <Switch>
          <Route path='/' exact>
            <Home isLogin={isLogin} />
          </Route>

          <Route path='/search'>
            <Search />
          </Route>

          <Route path='/anime/:animeId'>
            <AnimeDetail />
          </Route>

          <Route path='/account'>
            <Account setUser={setUser} isLogin={isLogin} setCookie={setCookie} />
          </Route>

          <Route path='/setting'>
            <Setting user={user} setUser={setUser} isLogin={isLogin} />
          </Route>

          <Route path='/thread'>
            <Thread user={user} isLogin={isLogin} />
          </Route>

          <Route path='*'>
            <Error />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
