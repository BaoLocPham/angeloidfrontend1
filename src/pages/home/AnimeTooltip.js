import React from 'react';

const AnimeTooltip = (props) => {
    
    return ( 
        
        <>
            <div >
                <p>{props.Anime.Studio}</p>
                <p>{props.Anime.Format} - {props.Anime.SeriesLength}</p>
                <p>
                    {
                        props.Anime.Tag.slice(0,3).map(tag=>(
                            <span key={tag} style={{backgroundColor:"orange", color:"#fff",borderRadius:"20%", padding:"2% 2%", margin:"5% 5%"}}>{tag}  </span> 
                        ))
                    }
                </p>
            </div>
        </>
     );
}
 
export default AnimeTooltip;