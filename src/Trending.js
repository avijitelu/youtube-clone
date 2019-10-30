/* ----------Third Party Module---------- */
import React, { Component } from 'react';

/* ----------Custom Module---------- */
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import GridContainer from './GridContainer';
import videoData from './data/videoData';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Navbar />
                <Sidebar />
                <div className="container">
                    <div className="wrapper">
                        <GridContainer recomendedVideo={videoData.recomended} name="Top Trending" />
                        <GridContainer recomendedVideo={videoData.recomended} name="Latest News" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;