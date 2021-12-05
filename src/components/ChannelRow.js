import { Avatar } from '@material-ui/core'
import { CheckCircleOutlineOutlined } from '@material-ui/icons'
import React from 'react'
import './channelRow.css'
const ChannelRow = (props) => {
    return (
        <div className="channelRow">
            <Avatar className="channelRow-logo"
                alt={props.channel} src= {props.image} 
                

            />
            <div className="channelRow-text">
                <h4> {props.channel}
                 {props.verified && <CheckCircleOutlineOutlined/>} 
                 </h4>
                 <p>
                     {props.subs} abonnés . {props.numVideos} videos
                 </p>
                 <p>
                     {props.description}
                 </p>
            </div>

        </div>
    )
}

export default ChannelRow
