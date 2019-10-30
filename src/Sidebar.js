import React, {Component} from 'react';

import SidebarLink from './SidebarLink';
import sidebarMenu from './data/sidebarMenu';

import userOne from './img/user-1.jpg';
import userTwo from './img/user-2.jpg';
import userThree from './img/user-3.jpg';
import userFour from './img/user-4.jpg';
import userFive from './img/user-5.jpg';
import userSix from './img/user-6.jpg';
import userSeven from './img/user-7.jpg';
import userEight from './img/user-8.jpg';
import './Sidebar.css';

const MAX_ITEMS = 5;

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpenHistory: false }
        this.getRenderedItems = this.getRenderedItems.bind(this);
        this.toggleHistory = this.toggleHistory.bind(this);
    }

    toggleHistory() {
        this.setState({ isOpenHistory: !this.state.isOpenHistory });
    }

    getRenderedItems() {
        if(this.state.isOpenHistory) {
            return sidebarMenu.history;
        } else {
            return sidebarMenu.history.slice(0, MAX_ITEMS);
        }
    }

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__group">
                    {sidebarMenu.basic.map(link => (
                        <SidebarLink {...link} key={link.name} />
                    ))}
                </div>
                <div className="sidebar__group">
                    {this.getRenderedItems().map(link => (
                        <SidebarLink {...link} key={link.name} />
                    ))}
                    <span className="sidebar__link" onClick={this.toggleHistory}>
                        <i className="material-icons">{this.state.isOpenHistory ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</i>
                        <span>Show more</span>
                    </span>
                </div>
                <div className="sidebar__group">
                    <h3 className="sidebar__link-title">Subscriptions</h3>
                    <span className="sidebar__link">
                        <img src={userOne} alt=""/>
                        <span>DevOps</span>
                    </span>
                    <span className="sidebar__link">
                        <img src={userTwo} alt=""/>
                        <span>ReactGuru</span>
                    </span>
                    <span className="sidebar__link">
                        <img src={userThree} alt=""/>
                        <span>Gouplimit</span>
                    </span>
                    <span className="sidebar__link">
                        <img src={userFour} alt=""/>
                        <span>Web Development</span>
                    </span>
                    <span className="sidebar__link">
                        <img src={userFive} alt=""/>
                        <span>Fullstack Heros</span>
                    </span>
                    <span className="sidebar__link">
                        <img src={userSix} alt=""/>
                        <span>Gouplimit</span>
                    </span>
                </div>
                <div className="sidebar__group">
                    <h3 className="sidebar__link-title">More from youtube</h3>
                    {sidebarMenu.more.map(link => (
                        <SidebarLink {...link} key={link.name} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Sidebar;