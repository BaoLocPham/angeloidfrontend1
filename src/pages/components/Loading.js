import React from 'react';
import Content from '../animedetail/Content';

/* 
User guide:
- Import this component
- Create a State "isLoading" with default value is "loading"
- Add setIsLoading(succeed) after cast JSON response to object (if many fetch choose the one with longest time)
- Add this script as your first return:
if (isLoading === 'loading') {
    return (
        <Loading content="Loading anything from database..."/>
    )
}
*/

const Loading = ({ content }) => {
    return (
        <div className="account-wallpaper w-100 d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-light rounded p-1" style={{ backgroundColor: "rgb(25, 41, 59, 0.5)" }} > {(content !== undefined) ? content : "Loading..."} </h1>
            <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">{(content !== undefined) ? content : "Loading..."}</span>
            </div>
        </div>
    );
}

export default Loading;