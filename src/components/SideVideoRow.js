import React from 'react'
import './SideVideosRow.css'
import { Link   } from 'react-router-dom'
const SideVideoRow = (props) => {
    return (
        <Link  to={{
            pathname: "/play" ,
            state : {id:1 , url: props.url ,title :props.title, views:props.views, timestamp:props.timestamp , channel:props.channel ,channelimg:props.channelimg , subs:props.subs} 
            
          }} className="link" > 
        <div className="Side-video-container">
            <div className="image-container">
                     <img src={props.image} alt="" className="video-image" />
            </div>
       
            <div className="video-info">
                
                <div className="video-text">
                    <h4 className= "video-desc-title">{props.title} </h4>
                    <p className="video-desc"> {props.channel}</p>
                    <p className="video-desc">
                        {props.views} . {props.timestamp}
                    </p>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default SideVideoRow
