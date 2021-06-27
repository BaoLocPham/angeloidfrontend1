import React, {useState} from 'react';
import ThreadSearch from './ThreadSearch';
import ThreadPosting from './ThreadPosting';
import ThreadList from './ThreadList';

const ThreadCenter = ({ user, isLogin }) => {
    const [threadAdded, setThreadAdded] = useState(0);
    return (
        <>
            <ThreadSearch />
            { isLogin ? 
                <ThreadPosting user={user} threadAdded={threadAdded} setThreadAdded={setThreadAdded} />
            : <h5 className="p-3">Please Login to post something!!!</h5> }
            <ThreadList threadAdded = { threadAdded}/>
        </>
    );
}

export default ThreadCenter;