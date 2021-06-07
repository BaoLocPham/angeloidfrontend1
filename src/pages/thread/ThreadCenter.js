import React from 'react';
import ThreadSearch from './ThreadSearch';
import ThreadPosting from './ThreadPosting';
import ThreadList from './ThreadList';

const ThreadCenter = () => {
    return (
        <>
            <ThreadSearch />
            <ThreadPosting />
            <ThreadList />
        </>
    );
}
 
export default ThreadCenter;