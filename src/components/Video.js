import { Avatar } from '@material-ui/core'
import React from 'react'
import { Link   } from 'react-router-dom'
import './video.css'
import { useState } from 'react'


const Video = (props) => {
  
     
    return (
        <Link  to={{
            pathname: "/play" ,
            state : {id:1 , url: props.url ,title :props.title, views:props.views, timestamp:props.timestamp , channel:props.channel ,channelimg:props.channelimg , subs:props.subs} 
            
          }} 
          className="link">
        <div className="videoCard"  >
            
            <img src={props.image} alt="" className="video-image"  />
            <div className="video-info">
                <Avatar className="video-avatar" alt={props.channel} src={props.channelimg}/>
                <div className="video-text">
                    <h4>{props.title} </h4>
                    <p> {props.channel}</p>
                    <p>
                        {props.views} . {props.timestamp}
                    </p>
                </div>
            </div>
        </div>
      </Link>
    )
}

export default Video
