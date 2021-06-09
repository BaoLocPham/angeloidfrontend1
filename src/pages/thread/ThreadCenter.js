import React from 'react';
import ThreadSearch from './ThreadSearch';
import ThreadPosting from './ThreadPosting';
import ThreadList from './ThreadList';

const ThreadCenter = ({ user }) => {
    return (
        <>
            <ThreadSearch />
            <ThreadPosting user={user} />
            <ThreadList />
        </>
    );
}
 
export default ThreadCenter;