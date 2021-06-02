import React from 'react';

const AnimeTooltip = ({ anime }) => {
    return (
        <div>
            <p>{anime.studio.studioName}</p>
            <p>{anime.format} - <br /> {(anime.episode === "null") ? "Comming soon" : anime.episode}</p>
            <div>
                {
                    anime.tags.map(tag => (
                        <div key={tag.tagId} 
                            style={{ backgroundColor: "orange", 
                                        color: "#fff", 
                                        borderRadius: "20%", 
                                        lineHeight: "2rem", 
                                        fontSize: ".75rem", 
                                        padding: "0em 0.5em", 
                                        margin: "2% 1%", 
                                        display: "inline-block" 
                                }}>
                                {tag.tagName}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default AnimeTooltip;