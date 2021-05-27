import React from 'react';
import AnimeTooltip from "./AnimeTooltip";

import ReactTooltip from 'react-tooltip';
const AnimeCard = (props) => {   
    /* const styleHorizontal={
                height:"15em", width:"10em", 
                backgroundSize:"cover",
                backgroundImage:`url(${props.Anime.Img})`,
                borderRadius:"5%",
                margin:"0 10px 0 -10%"   
            }; */
    const styleVertical={
        height:"15em", width:"10em", 
        backgroundSize:"cover",
        backgroundImage:`url(${props.Anime.Img})`,
        borderRadius:"5%",
        margin:"auto"   
    }
    /* const tooltipStyle={
        backgroundColor:"#19293B",
    } */
    if (props.isVertical){
        return (
            <div className="col-12">
                <a href="/anime/1"><div data-tip data-for="leftTooltip" style={styleVertical}></div></a>
                    <ReactTooltip  place="left" id="leftTooltip" type="">
                    <AnimeTooltip Anime={props.Anime}/>
                    </ReactTooltip>
                <h4 style={{color:"#fff"}}>{props.Anime.Name}</h4>  
            </div>
        );
    }
    else if (props.Anime.Count!==5){
        return (
            <div className="col-6 col-lg-2">
               <a href="/anime/1"><div data-tip data-for="rightTooltip" style={styleVertical}></div></a>
                <ReactTooltip  place="right"  id="rightTooltip" type="">
                    <AnimeTooltip  Anime={props.Anime}/>
                </ReactTooltip>
                <h4 style={{color:"#fff"}}>{props.Anime.Name}</h4>  
            </div>
        );
    }else{
        return (
            
            <div className="col-6 col-lg-2 d-none d-lg-block">
                <a href="/anime/1"><div data-tip data-for="leftTooltip" style={styleVertical}></div></a>
                <ReactTooltip key={props.Anime.id} place="left" id="leftTooltip" type="">
                    <AnimeTooltip key={props.Anime.id} Anime={props.Anime}/>
                </ReactTooltip>
                <h4 style={{color:"#fff"}}>{props.Anime.Name}</h4>       
            </div>
            
        );
    }
}
export default AnimeCard;