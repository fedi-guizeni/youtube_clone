import React from 'react'
import './Sidevideo.css'
import SideVideoRow from './SideVideoRow'
import { videoInfo } from '../data'
const SideVideos = () => {
    return (
        <div className="SideVideo">
             {
              videoInfo.map((item)=> (
                <SideVideoRow
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
    )
}

export default SideVideos
