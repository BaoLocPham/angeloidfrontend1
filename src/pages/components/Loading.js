import React from 'react';

/* 
User guide:
- Import this component
- Create a State "isLoading" with default value is "loading"
- Add setIsLoading(succeed) after cast JSON response to object (if many fetch choose the one with longest time)
- Add this script as your first return:
if (isLoading === 'loading') {
    return (
        <Loading />
    )
}
*/

const Loading = () => {
    return ( 
        <div className="account-wallpaper w-100 d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-light">Loading...</h1>
            <div class="spinner-border text-light" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Loading;