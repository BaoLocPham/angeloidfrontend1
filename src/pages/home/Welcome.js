import React from 'react';
import './Welcome.css';
import Amiya from './image/Amiya.png';
import SpeechBalloon from './image/speech-balloon.png';
import "bootstrap/dist/css/bootstrap.min.css";

const Welcome = () => {
    const welcomeContainterStyle = {
        marginTop: "10%"
    }

    return (
        <div className="bg-arknights d-flex flex-row justify-content-center w-100">
            <img className="h-50 w-50 amiya" src={Amiya} />
            <img className="h-25 w-25 balloon" src={SpeechBalloon} style={welcomeContainterStyle} />
        </div>
    );
}

export default Welcome;