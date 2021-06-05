import './App.css';
// Import Libraries
import React, { useState , useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
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

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [user, setUser] = useState({});

  useEffect(() => {

    user.userId === undefined ? setIsLogin(false) : setIsLogin(true);
  }, [user]
  );

  const handleLogout = () => {
    setIsLogin(false);
  }

  return (
    <Router>
      <div className="" style={{ width: "100vw" }}>
        <Nav isLogin={isLogin} handleLogout={handleLogout} />

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
            <Account setUser={setUser} isLogin={isLogin} />
          </Route>

          <Route path='/setting'>
            <Setting user={user} />
          </Route>

          <Route path='/thread'>
            <Thread />
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
