import { Avatar } from '@material-ui/core'
import React from 'react'
import './videoRow.css'
import { Link   } from 'react-router-dom'
const VideoRow = (props) => {
    return (
        <Link  to={{
            pathname: "/play" ,
            state : {id:1 , url: props.url ,title :props.title, views:props.views, timestamp:props.timestamp , channel:props.channel ,channelimg:props.channelimg , subs:props.subs} 
            
          }}  className="link">
        <div className="videoRow">
            <img src= {props.image} alt={props.channel} />
            <div className="videoRow-text">
                <h3> {props.title} </h3>
                <p className="videoRow-headline">  
                    {props.views}  . {props.timestamp}
                </p>
                <div className="videoRow-center">
                    <Avatar
                    src={props.channelimg}
                    />
                    <p> {props.channel} </p>
                </div>
                <p className="videoRow-desc"> {props.desc} </p>
            </div>
        </div>
        </Link>
    )
}

export default VideoRow
