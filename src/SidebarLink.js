import React from 'react';
import {Link} from 'react-router-dom';

function SidebarLink(props) {
    return (
        <Link to={props.url} className="sidebar__link">
            <i className="material-icons">{props.iconName}</i>
            <span>{props.name}</span>
        </Link>
    );
}

export default SidebarLink;