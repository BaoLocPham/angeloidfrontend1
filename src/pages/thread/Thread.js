import React, { useEffect } from 'react';

const Thread = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            I am Thread Page!
        </>
    );
}

export default Thread;