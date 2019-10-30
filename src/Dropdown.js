/* ----------Third Party Module---------- */
import React from 'react';

/* ----------Custom Module---------- */
import DropdownList from './DropdownList';

/* ----------CSS Files---------- */
import './Dropdown.css';

function Dropdown(props) {
    return (
        <ul className="dropdown__menu">
            {props.dropdownMenu.map(link => (
                <DropdownList name={link.name} icon={link.iconName} /> 
            ))}
        </ul>
    );
}

export default Dropdown;