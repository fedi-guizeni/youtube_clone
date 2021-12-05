import React from 'react';
import './SidebarRow.css';

const SidebarRow = (props ) => {
    return (
        <div className={`sidebarRow ${props.selected && "selected"} `} onClick={props.more}>
             <props.icon className="sidebar-icon"/>
            <h3 className="sidebar-title">{props.title} </h3>
        </div>
    )
}

export default SidebarRow
