import {   ExpandLessOutlined, ExpandMoreOutlined, ExploreOutlined, History, Home,    OndemandVideoOutlined,  SubscriptionsOutlined, ThumbUpAltOutlined, VideoLibraryOutlined,  WatchLaterOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import './sidebar.css';
import SidebarRow from './SidebarRow';
const Sidebar = () => {
    const [show,setShow]=useState(false)
    return (
        <div className="sidebar">
            
            <SidebarRow  icon={Home} title="Acceuil"  selected/>
            <SidebarRow  icon={ExploreOutlined} title="Explorer" />
            <SidebarRow  icon={SubscriptionsOutlined} title="Abonnements" />
            <hr />
            <SidebarRow icon={VideoLibraryOutlined} title="Bibliothèque"/>
                <SidebarRow icon={History} title="Historique"/>

               { show ?
               <div>
                <SidebarRow icon={OndemandVideoOutlined} title="vos vidèos"/>
                <SidebarRow icon={WatchLaterOutlined} title="A regarder plus tard"/>
                <SidebarRow icon={ThumbUpAltOutlined} title='vidèos  "J aime "  '/>
                 </div> :null
                
               
            }
              { show ?
                  <SidebarRow icon={ ExpandLessOutlined} title="moins" more= {()=>setShow(!show)}/>
                  : <SidebarRow icon={ExpandMoreOutlined} title="plus" more= {()=>setShow(!show)}/>
              }
            
            <hr />
        </div>
    )
}

export default Sidebar

