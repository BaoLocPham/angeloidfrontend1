import React, { useEffect } from 'react';

import Welcome from './Welcome';
import Features from './Features';
import AnimeList from './AnimeList';

const Home = ({ isLogin }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="bg-dark-container" style={{ width: "100%", padding: "0 5% 0 5%" }}>
            { isLogin ?
                <Welcome />
                : <Features />
            }
            <AnimeList content="POPULAR THIS SEASON" isVertical={false} />
            <AnimeList content="UPCOMING NEXT SEASON" isVertical={false} />
            <AnimeList content="ALL TIME POPULAR" isVertical={false} />
        </div>
    );
}

export default Home;