import React from 'react';
import ThreadSearch from './ThreadSearch';
import ThreadPosting from './ThreadPosting';
import ThreadList from './ThreadList';

const ThreadCenter = ({ user, isLogin }) => {
    return (
        <>
            <ThreadSearch />
            { isLogin ? 
                <ThreadPosting user={user} />
            : <h5 className="p-3">Please Login to post something!!!</h5> }
            <ThreadList />
        </>
    );
}
 
export default ThreadCenter;