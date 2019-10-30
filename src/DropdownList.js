/* ----------Third Party Module---------- */
import React from "react";


function DropdownList(props) {
    return (
        <li className="dropdown__item">
            <span className="dropdown__link">
                <i className="material-icons">{props.icon}</i>
                <span>{props.name}</span>
            </span>
        </li>
    );
}

export default DropdownList;
