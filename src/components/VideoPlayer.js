import React , { useState } from 'react'
import './videoPlayer.css'
import ReactPlayer from 'react-player'
import { AddBoxOutlined,  NotificationsNone,  ShareOutlined, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import { useLocation } from 'react-router-dom'
import { Avatar  } from '@material-ui/core'



const  VideoPlayer = (props) =>  {

    const [show,setShow]=useState(false)


const clickHandler = (e)=> {
    if (e.target.value==="S'ABONNER") {
      
        e.target.value="ABONNE"
        e.target.style.background= "gray"
        e.target.style.color="black"
        
        
    }
    else if
     (e.target.value==="ABONNE") {  
        
        e.target.value="S'ABONNER"
        e.target.style.background= "red"
        e.target.style.color="white"
        
    }
}

    const { state: { url , title ,views,timestamp,channel,channelimg , subs } = {} } = useLocation();
    
        const emp = useLocation()

        console.log(emp)
    
    return (
        <div className="video-container" >
            <div className="video-player">
             
            <ReactPlayer

            controls
            width= '900px'
            height='500px'
            
             url= {url}
            
            />
                <div className="video-desc">
                    <h4> {title} </h4>
                    <div className="video-icons">
                           <div className="video-icons-left">
                               <p> {views} . {timestamp}</p>
                           </div>
                          <div className="video-icons-right">
                              <ThumbUpAltOutlined className="icons"/>  <span className="icons">100 </span>
                          <ThumbDownAltOutlined className="icons"/> <span className="icons">100</span>
                          <ShareOutlined className="icons"/> <span className="icons">PARTAGER </span>
                          <AddBoxOutlined className="icons"/> <span className="icons">ENREGISTRER</span>
                          </div>
                          
                    </div>
                  
                </div>
                <hr />
                   <div className="channel">
                       <div className="right">

                      
                   <Avatar className="video-avatar" alt={channel} src={channelimg}/>
                   <div className="channel-desc">
                       <p  className="channel-name"> {channel} </p>
                       <p className="subs">  {subs} abonnés</p>
                        </div>
                       
                   </div>
                   <div className="sub-btn"> <input type="submit" value="S'ABONNER" onClick={clickHandler}  on={()=>setShow(!show)}  />
                   { show ? 
                        <NotificationsNone/>
                        : null }
                   </div> 
                      
                   </div>
            </div>
         
        </div>
    )
}


export default VideoPlayer
