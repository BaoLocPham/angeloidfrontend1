import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/translucent.css';
import AnimeTooltip from "./AnimeTooltip";
const AnimeCard = (props) => {   
    const styleHorizontal={
                height:"15em", width:"10em", 
                backgroundSize:"cover",
                backgroundImage:`url(${props.Anime.Img})`,
                borderRadius:"5%",
                margin:"0 10px 0 -10%"   
            };
    const styleVertical={
        height:"15em", width:"10em", 
        backgroundSize:"cover",
        backgroundImage:`url(${props.Anime.Img})`,
        borderRadius:"5%",
        margin:"auto"   
    }
    const tooltipStyle={
        backgroundColor:"#19293B",
    }
    if (props.isVertical){
        return (
            <div className="col-12">
                <Tippy 
                    placement="left"
                    style={tooltipStyle}
                    theme= {'translucent'}
                    content={<AnimeTooltip Anime={props.Anime}/>} >
                    <div style={styleVertical} ></div>
                </Tippy> 
                <h4 style={{color:"#fff"}}>{props.Anime.Name}</h4>
            </div>
        );
    }
    else if (props.Anime.Count!==5){
        return (
            <div className="col-5 col-lg-2">
                <Tippy 
                    placement="right"
                    style={tooltipStyle}
                    theme= {'translucent'}
                    content={<AnimeTooltip Anime={props.Anime}/>} >
                    <div style={styleHorizontal} ></div>
                </Tippy> 
                <h4 style={{color:"#fff"}}>{props.Anime.Name}</h4>
            </div>
        );
    }else{
        return (
            
            <div className="col-5 col-lg-2 d-none d-lg-block">
                <Tippy 
                    placement="left"
                    style={tooltipStyle}
                    theme= {'translucent'}
                    content={<AnimeTooltip Anime={props.Anime}/>} >
                    <div style={styleHorizontal} ></div>
                </Tippy>  
                <h4 style={{color:"#fff"}}>{props.Anime.Name}</h4>          
            </div>
            
        );
    }
}
export default AnimeCard;