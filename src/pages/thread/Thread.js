import React, { useEffect } from 'react';
import Advertisement from './Advertisement';
import ThreadCenter from './ThreadCenter';
import ThreadAnimeList from './ThreadAnimeList';

const Thread = ({ user, isLogin }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="row pt-5 bg-dark-container">
            <div className="d-none d-md-block col-md-3">
                <Advertisement />
            </div>
            <div className="col-12 col-md-6 px-4">
                <ThreadCenter user={user} isLogin={isLogin} />
            </div>
            <div className="d-none d-md-block col-md-3">
                <ThreadAnimeList />
            </div>
        </div>
    );
}

export default Thread;