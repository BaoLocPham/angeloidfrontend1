import React from 'react';

const AnimeTooltip = (props) => {
    
    return ( 
        
        <>
            <div >
                <p>{props.Anime.Studio}</p>
                <p>{props.Anime.Format} - {props.Anime.SeriesLength}</p>
                <div>
                    {
                        props.Anime.Tag.slice(0,3).map(tag=>(
                            <div key={tag} style={{backgroundColor:"orange", color:"#fff",borderRadius:"20%",lineHeight:"2rem", fontSize:"0.5rem", padding:"0em 0.5em", margin:"2% 1%", display:"inline-block"}}>{tag}  </div> 
                        ))
                    }
                </div>
            </div>
        </>
     );
}
 
export default AnimeTooltip;