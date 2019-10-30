import React, { Component } from "react";
import VideoCard from './VideoCard';

import './GridContainer.css';

class GridContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { isExpand: false }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ isExpand: !this.state.isExpand });
    }

    getVideoContent() {
        if(this.state.isExpand) {
            return this.props.recomendedVideo;
        } else {
            return this.props.recomendedVideo.slice(0, 10);
        }
    }

    render() {
        return (
            <div className="grid-container">
                <div className="header">
                    <h2 className="header__title">{this.props.name}</h2>
                </div>
                <div className="grid-container__body">
                    {this.getVideoContent().map(video => (
                        <VideoCard {...video} />
                    ))}
                </div>
                <a className="show-more" onClick={this.toggle}>{this.state.isExpand ? 'Show Less' : 'Show More'}</a>
            </div>
        );
    }
}

export default GridContainer;
