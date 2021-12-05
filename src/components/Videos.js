import React from 'react'
import Video from './Video'
import './videos.css'
import { videoInfo } from '../data'
import { useHistory } from 'react-router-dom'
const Videos = (props) => {

  let history = useHistory();
    return (
        <div className="videos"  >
          
          <div className="videos-content">
            {
              videoInfo.map((item)=> (
                <Video
                
              
                title= {item.title}
                  image = {item.image}
                  views= {item.views}
                   timestamp={item.timestamp}
                 channel={item.channel}
                channelimg={item.channelimg}
                 url={item.url}
                 subs={item.subs}
                               
                />
              ))}
                                                                
          </div>
        </div>
    )
}

export default Videos
