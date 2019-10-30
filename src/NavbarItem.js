/* ----------Third Party Module---------- */
import React, { Component } from 'react';

/* ----------Custom Module---------- */
import Dropdown from './Dropdown';

/* ----------CSS Files---------- */

class NavbarItem extends Component {
    constructor(props) {
        super(props);
        this.state = { showDropdown: false }
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    }

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ showDropdown: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        })
    }

    hideDropdownMenu() {
        this.setState({ showDropdown: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        })
    }

    render() {
        const { dropdown, iconName } = this.props;

        return (
            <li className="navbar__item dropdown" onClick={this.showDropdownMenu}>
                <span className="navbar__link">
                    <i className="material-icons">{iconName}</i>
                </span>
                { this.state.showDropdown && <Dropdown dropdownMenu={dropdown} /> }
            </li>
        );
    }
}
 
export default NavbarItem;