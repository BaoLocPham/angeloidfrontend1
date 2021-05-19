import React from 'react';

import Welcome from './Welcome';
import Features from './Features';
import AnimeList from './AnimeList';

const Home = ({ isLogin }) => {
    return (
        <div className="bg-dark" style={{ width: "100%" }}>
            { isLogin ?
                <Welcome />
                : <Features />
            }
        </div>
    );
}

export default Home;