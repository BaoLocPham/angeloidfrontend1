//dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

//local dependencies
import AnimeTooltip from "./AnimeTooltip";

const AnimeCard = ({ anime, isVertical, count }) => {

    //Vertical style
    const styleVertical = {
        height: "15em", width: "10em",
        backgroundSize: "cover",
        backgroundImage: `url("data:image/jpeg;base64,${anime.thumbnail}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 20%",
        borderRadius: "5%",
        margin: "auto"
    }

    //Remove underline in text in Link tag
    const linkStyle = {
        textDecoration: "none"
    }

    //Vertical view
    if (isVertical) {
        return (
            <div className="col-12 py-2">
                <Link to={`/anime/${anime.animeId}`} style={linkStyle}>
                    <div data-tip data-for={`${anime.animeId}`} style={styleVertical}></div>
                    <ReactTooltip place="left" id={`${anime.animeId}`} type="">
                        <AnimeTooltip anime={anime} />
                    </ReactTooltip>
                    <h6 style={{ color: "#fff", paddingTop: "1rem"}}>{anime.animeName}</h6>
                </Link>
            </div>
        );
    }

    // The last item in vertical view to config right tooltip
    else if (count !== 5) {
        return (
            <div className="col-6 col-lg-2">
                <Link to={`/anime/${anime.animeId}`} style={linkStyle}>
                    <div data-tip data-for={`${anime.animeId}`} style={styleVertical}></div>
                    <ReactTooltip place="right" id={`${anime.animeId}`}>
                        <AnimeTooltip anime={anime} />
                    </ReactTooltip>
                    <h6 style={{ color: "#fff", paddingTop: "1rem"}}>{anime.animeName}</h6>
                </Link>
            </div>
        );
    } 
    
    // Display for mobile app
    else {
        return (

            <div className="col-6 col-lg-2 d-none d-lg-block">
                <Link to={`/anime/${anime.animeId}`} style={linkStyle}>
                    <div data-tip data-for={`${anime.animeId}`} style={styleVertical}></div>
                    <ReactTooltip key={anime.animeId} place="left" id={`${anime.animeId}`} type="">
                        <AnimeTooltip key={anime.animeId} anime={anime} />
                    </ReactTooltip>
                    <h6 style={{ color: "#fff", paddingTop: "1rem"}}>{anime.animeName}</h6>
                </Link>
            </div>

        );
    }
}
export default AnimeCard;