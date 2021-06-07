import React, { useEffect } from 'react';
import Advertisement from './Advertisement';
import ThreadCenter from './ThreadCenter';
import ThreadAnimeList from './ThreadAnimeList';

const Thread = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="row">
            <div className="col-0 col-md-2">
                <Advertisement />
            </div>
            <div className="col-12 col-md-8">
                <ThreadCenter />
            </div>
            <div className="col-0 col-md-2">
                <ThreadAnimeList />
            </div>
        </div>
    );
}

export default Thread;