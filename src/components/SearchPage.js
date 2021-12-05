import { TuneOutlined, VpnKeySharp } from '@material-ui/icons'
import React from 'react'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import './searchPage.css'
import { videoInfo , channelInfo} from '../data'


const SearchPage = (props) => {
    
    return (
        <div className="searchPage">
            
            <div className="searchPage-filter">
                <TuneOutlined/>
                <h2>Filter</h2>
            </div>
            <hr />
            {channelInfo.filter((item ,index)=>{
                if (props.search==="") {
                    return item
                }else if (  (item.channel.toLowerCase().includes(props.search.toLowerCase()))) {
                    return item
                }
            }).map((item, )=> (
                <div>
                <ChannelRow
                
                  image = {item.image}
                   channel={item.channel}
                  verified= {item.verif}
                  subs = {item.subs}
                  numVideos={item.numVideos}
                  description={item.description}
                          
                />
                 
               </div>
               
              ))}
          
          <hr/>
          
            {videoInfo.filter((item)=>{
                if (props.search==="") {
                    return item
                }else if ((item.title.toLowerCase().includes(props.search.toLowerCase())) || (item.channel.toLowerCase().includes(props.search.toLowerCase()))) {
                    return item
                }
            }).map((item)=> (
                <div>
                <VideoRow
                title= {item.title}
                  image = {item.image}
                  views= {item.views}
                   timestamp={item.timestamp}
                 channel={item.channel}
                channelimg={item.channelimg}
                desc={item.desc} 
                url = {item.url}    
                subs={item.subs}        
                />
               
               </div>
              ))}
        </div>
    )
}

export default SearchPage
