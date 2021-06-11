import React, { useState, useEffect } from 'react';

import ThreadContent from './ThreadContent'

const ThreadList = () => {
    const [threadList, setThreadList] = useState([
        { threadId: 1, title: "Anime ga sukidesu", content: "Anyone know this character. I see this on the internet.", image: "", user: { fullName: "Mash", avatar: ""}},
        { threadId: 2, title: "Anime ga sukidesu", content: "Anyone know this character. I see this on the internet.", image: "", user: { fullName: "Mash", avatar: "" } },
        { threadId: 3, title: "Anime ga sukidesu", content: "Anyone know this character. I see this on the internet.", image: "", user: { fullName: "Mash", avatar: "" } },
        { threadId: 4, title: "Anime ga sukidesu", content: "Anyone know this character. I see this on the internet.", image: "", user: { fullName: "Mash", avatar: "" } },
        { threadId: 5, title: "Anime ga sukidesu", content: "Anyone know this character. I see this on the internet.", image: "", user: { fullName: "Mash", avatar: "" } },
        { threadId: 6, title: "Anime ga sukidesu", content: "Anyone know this character. I see this on the internet.", image: "", user: { fullName: "Mash", avatar: "" } },
        { threadId: 7, title: "Anime ga sukidesu", content: "Anyone know this character. I see this on the internet.", image: "", user: { fullName: "Mash", avatar: "" } },
        { threadId: 8, title: "Anime ga sukidesu", content: "Anyone know this character. I see this on the internet.", image: "", user: { fullName: "Mash", avatar: "" } },
        { threadId: 9, title: "Anime ga sukidesu", content: "Anyone know this character. I see this on the internet.", image: "", user: { fullName: "Mash", avatar: "" } },
        { threadId: 10, title: "Anime ga sukidesu", content: "Anyone know this character. I see this on the internet.", image: "", user: { fullName: "Mash", avatar: "" } }
    ]);

    const updateThreadList = [
        { threadId: 11, title: "I like this anime", content: "Anyone know this character. I see this on the internet.", image: "", user: { fullName: "Haruka", avatar: "" } },
        { threadId: 12, title: "I like this anime", content: "Anyone know this character. I see this on the internet.", image: "", user: { fullName: "Haruka", avatar: "" } },
        { threadId: 13, title: "I like this anime", content: "Anyone know this character. I see this on the internet.", image: "", user: { fullName: "Haruka", avatar: "" } },
        { threadId: 14, title: "I like this anime", content: "Anyone know this character. I see this on the internet.", image: "", user: { fullName: "Haruka", avatar: "" } },
        { threadId: 15, title: "I like this anime", content: "Anyone know this character. I see this on the internet.", image: "", user: { fullName: "Haruka", avatar: "" } },
        { threadId: 16, title: "I like this anime", content: "Anyone know this character. I see this on the internet.", image: "", user: { fullName: "Haruka", avatar: "" } },
        { threadId: 17, title: "I like this anime", content: "Anyone know this character. I see this on the internet.", image: "", user: { fullName: "Haruka", avatar: "" } },
        { threadId: 18, title: "I like this anime", content: "Anyone know this character. I see this on the internet.", image: "", user: { fullName: "Haruka", avatar: "" } },
        { threadId: 19, title: "I like this anime", content: "Anyone know this character. I see this on the internet.", image: "", user: { fullName: "Haruka", avatar: "" } },
        { threadId: 20, title: "I like this anime", content: "Anyone know this character. I see this on the internet.", image: "", user: { fullName: "Haruka", avatar: "" } },
    ];

    //xóa vị trí củ sau khi render lại 
    useEffect(() => {
        window.history.scrollRestoration = "manual";
    }, []);

    const handleUpdate = () => {
    }

    useEffect(() => {
        const threadList = document.getElementById("threadList");
        window.addEventListener('scroll', () => {
            //Nếu tọa độ hiện tại theo chiều dọc + chiều dài của màn hình người dùng
            //Bằng với chiều dài của threadList cộng khoảng cách từ threadList hiện tại tới đầu trang - 16
            //Thực hiện thâm dữ liệu 
            if (window.scrollY + window.innerHeight > threadList.clientHeight + threadList.offsetTop - 16) {

                //Thực hiện cập nhật thêm Thread khi khéo xuống cuối trang
                setThreadList(prev => { return [...prev, ...updateThreadList] });
            }
        });
        return () => {
            window.removeEventListener('scroll', handleUpdate);
        };
    });

    return (
        <div id="threadList">
            {
                threadList.map(thread => (

                    <ThreadContent content={thread} />
                ))
            }

        </div>
    );
}

export default ThreadList;