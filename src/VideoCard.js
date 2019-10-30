import React, { Component } from "react";

import './VideoCard.css';

class VideoCard extends Component {
    render() {
        return (
            <div className="video">
                <div className="video__thumbnail">
                    <img src={`${process.env.PUBLIC_URL}/img/${this.props.img}`} alt=""/>
                </div>
                <div className="video__info">
                    <h3 className="video__title">{this.props.title}</h3>
                    <p className="video__channel-name">{this.props.channelName}</p>
                    <div className="video__stats">
                        <span>{this.props.views}</span>
                        <span>{this.props.time}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoCard;
