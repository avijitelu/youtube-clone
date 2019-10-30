/* ----------Third Party Module---------- */
import React, { Component } from 'react';

/* ----------Custom Module---------- */
import NavbarItem from './NavbarItem';

/* ----------Other Files---------- */
import user from './img/user-1.jpg';
import logo from './img/logo.svg';
import navbarMenu from './data/navbarMenu';

/* ----------CSS Files---------- */
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar">
                <div className="navbar__brand">
                    <div className="navbar__btn"><i className="material-icons">menu</i></div>
                    <img src={logo} className="navbar__logo" alt="youtube logo"/>
                </div>
                <div className="navbar__search">
                    <form action="" className="navbar__search-form">
                        <div className="form__group">
                            <input type="text" className="form__input" placeholder="Search" />
                            <button type="submit" className="navbar__search-btn"><i className="material-icons">search</i></button>
                        </div>
                    </form>
                </div>
                <ul className="navbar__list">
                    { navbarMenu.map(menu => (
                        <NavbarItem {...menu} key={menu.name} />
                    ))}
                    <li className="navbar__item dropdown" onClick={this.handleDropdown}>
                        <span className="navbar__link">
                            <img src={user} alt=""/>
                        </span>
                        {/* { this.state.navbar.showProfile && <Dropdown dropdownMenu={dropdown.profile} />} */}
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
