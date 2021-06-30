import React, { useState, useEffect } from 'react';

import ThreadContent from './ThreadContent'

const ThreadList = ({ threadList, setThreadList, isSearch }) => {

    // last thread id -> for fetch api
    const [lastId, setLastId] = useState(0);
    // is there any thread left
    const [isAnyLeft, setIsAnyLeft] = useState(true);

    function noScroll() {
        var x = window.scrollX;
        var y = window.scrollY;
        window.scrollTo(x, y);
    }

    useEffect(() => {
        if (isSearch !== true) {
            const insidethreadList = document.getElementById("threadList");
            window.addEventListener('scroll', () => {
                //Nếu tọa độ hiện tại theo chiều dọc + chiều dài của màn hình người dùng
                //Bằng với chiều dài của threadList cộng khoảng cách từ threadList hiện tại tới đầu trang - 16
                //Thực hiện thâm dữ liệu 
                if (isAnyLeft && window.scrollY + window.innerHeight > insidethreadList.clientHeight + insidethreadList.offsetTop - 16) {
                    // temporary disable scrolling
                    window.addEventListener('scroll', noScroll);
                    //Thực hiện cập nhật thêm Thread khi khéo xuống cuối trang
                    // setThreadList(prev => { return [...prev, ...updateThreadList] });
                    if (lastId != undefined) {
                        fetch(`${process.env.REACT_APP_BACKEND_URL}api/thread/load/${lastId}`,
                            {
                                method: "GET"
                            }
                        )
                            .then(res => res.json())
                            .then(res => {
                                if (res.length !== 0) {
                                    setThreadList([...threadList, ...res]);
                                }
                                if (res.length == 0) { // if res is null=> there is no thread left
                                    setIsAnyLeft(false);
                                }
                            })
                    }
                }
            });
            return () => {
                window.removeEventListener('scroll', noScroll);
            };
        }
    });

    useEffect(() => {
        setLastId(threadList[threadList.length - 1].threadId);
    }, [threadList])

    return (
        <div id="threadList">
            {   // check if threadList is default or not 
                // if threadlist is default then not load thread content
                threadList.length === 1 ? "" :
                    threadList.map(thread => (
                        <ThreadContent key={thread.threadId} content={thread} />
                    ))
            }
        </div>
    );
}

export default ThreadList;