import React from 'react';

import ThreadContent from './ThreadContent'

const ThreadList = () => {
    const threadList = [
        { title: "Anime ga sukidesu", content: "Anyone know this character. I see this on the internet.", image: "", avatar: ""},
        { title: "Anime ga sukidesu", content: "Anyone know this character. I see this on the internet.", image: "", avatar: "" },
        
    ]

    return (
        <div>
            {
                threadList.map(thread => (
                    <ThreadContent content={thread}/>
                ))
            }
            
        </div>
    );
}

export default ThreadList;