import React, { useState, useEffect } from 'react';
import ThreadSearch from './ThreadSearch';
import ThreadPosting from './ThreadPosting';
import ThreadList from './ThreadList';
import Kanna from '../error/Kanna.png';

const KANNA_IMG_STYLE = {
    height: "35rem",
    width: "100%",
    backgroundImage: `url(${Kanna})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
}

const ThreadCenter = ({ user, isLogin }) => {
    const [threadAdded, setThreadAdded] = useState(0);
    const [threadList, setThreadList] = useState([
        { threadId: 0 }
    ]);
    const [textInput, setTextInput] = useState("");
    const [isSearch, setIsSearch] = useState(false);


    function isEmptyOrSpaces(str) {
        return str === null || str.match(/^ *$/) !== null;
    }

    // Handle when user search title
    const handleSearchThread = (event) => {
        event.preventDefault();
        if (isEmptyOrSpaces(textInput)) {
            setIsSearch(false);
            fetch(`${process.env.REACT_APP_BACKEND_URL}api/thread/startup`,
                {
                    method: "GET",
                    headers: { 'Content-Type': 'application/json' },
                }
            )
                .then(res => res.json())
                .then(res => setThreadList(res))
        } else {
            setIsSearch(true);
            fetch(`${process.env.REACT_APP_BACKEND_URL}api/thread/searchThread`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    searchString: textInput
                })
            })
                .then(res => res.json())
                .then(res => setThreadList(res))
        }
    }

    //xóa vị trí cũ sau khi render lại 
    useEffect(() => {
        if (isSearch !== true) {
            window.history.scrollRestoration = "manual";
            fetch(`${process.env.REACT_APP_BACKEND_URL}api/thread/startup`,
                {
                    method: "GET",
                    headers: { 'Content-Type': 'application/json' },
                }
            )
                .then(res => res.json())
                .then(res => setThreadList(res))
        }
    }, []);
    useEffect(() => {
        if (isSearch !== true) {
            fetch(`${process.env.REACT_APP_BACKEND_URL}api/thread/startup`,
                {
                    method: "GET",
                    headers: { 'Content-Type': 'application/json' },
                }
            )
                .then(res => res.json())
                .then(res => setThreadList(res))
        }
    }, [threadAdded]);

    return (
        <>
            <ThreadSearch handleSearchThread={handleSearchThread} setTextInput={setTextInput} />
            {isLogin ?
                <ThreadPosting user={user} threadAdded={threadAdded} setThreadAdded={setThreadAdded} />
                : <h5 className="p-3">Please Login to post something!!!</h5>}
            {threadList.length === 0
                ?
                <div className="justify-content-center align-items-center">
                    <h5 className="p-2"><u>Oops... We could not find your thread...</u></h5>
                    <div className="my-2" style={KANNA_IMG_STYLE} ></div>
                </div>
                :
                <ThreadList threadList={threadList} setThreadList={setThreadList} isSearch={isSearch} />
            }
        </>
    );
}

export default ThreadCenter;