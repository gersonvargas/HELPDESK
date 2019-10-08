// Dependencies
import React, { Component } from 'react';
import about_us from "../Global/images/About.jpg";
import '../Global/css/About/about.css';

import CardGroup from './CardGroup';
class About extends Component {
    componentWillMount() {
        document.title = 'About'
    }
    render() {
        return (
                <div className="About">
                    <div className='row'>
                
                        <div className='col-md-6 mt-3 mb-3'>
                            <img src={about_us} className="img-fluid" alt="about us" id="" />
                        </div>
                
                        <div className='col-md-6 mt-3'>
                            <h1>About us</h1>
                            <p>Founded in April of 2018, job search by Delta is trusted web site to search jobs from GitHub from anyplace of the world.</p>
                            <p>Job search by Delta connects people to jobs and it is the easiest way for this people to search this information by differents ways, for example, by categories.</p>
                        </div>
                
                        <h1> Desarrolladores de nuestro sitio web </h1>
                        <span class="badge badge-primary">Primary</span>
                                <span class="badge badge-secondary">Secondary</span>
                                <span class="badge badge-success">Success</span>
                                <span class="badge badge-danger">Danger</span>
                                <span class="badge badge-warning">Warning</span>
                                <span class="badge badge-info">Info</span>
                                <span class="badge badge-light">Light</span>
                                <span class="badge badge-dark">Dark</span>
                        <CardGroup/>
                    </div>
                </div>
                );
    }
}

export default About;
