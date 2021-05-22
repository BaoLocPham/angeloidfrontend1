import React from 'react';

import Welcome from './Welcome';
import Features from './Features';
import AnimeList from './AnimeList';

const Home = ({ isLogin }) => {
    return (
        <div className="bg-dark-container" style={{ width: "100%", padding: "0 5% 0 5%" }}>
            { isLogin ?
                <Welcome />
                : <Features />
            }
            <AnimeList />
            <AnimeList />
            <AnimeList />
        </div>
    );
}

export default Home;