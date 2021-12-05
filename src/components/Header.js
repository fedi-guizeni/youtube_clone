import './header.css';
import { Apps,  Notifications, Search, VideoCall } from '@material-ui/icons';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import React, { useState } from 'react'
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';


const Header = (props) => {
    const [inputSearch, setInputSearch] = useState('')
    
  
    return (
        <div className="header">
            <div className="header-left">
                <MenuSharpIcon/>
                <Link to="/">
                 <img className="header-logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
            alt="" />
                </Link>
          
            </div>
            <div className="header-center"> 
            <input onClick={(e)=>setInputSearch(e.target.value)}
                    
                    type="text"  placeholder="Rechercher"
                    onChange={(event)=>{
                      props.setsearch (event.target.value)
                    
                    }}
                    className="search"/>
                    <Link to={`/search/${inputSearch}`}>
                           <Search className="header-center-icon"/>
                    </Link>
                    
            
            </div>
            <div className="header-right"> 
            <VideoCall className="header-icons"/>
            <Apps className="header-icons"/>
            <Notifications className="header-icons"/>
            <Avatar src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
             </div>
        </div>
    )
}

export default Header
