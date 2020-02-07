import React, { Component } from 'react';
import jo from '../Static/Images/jo.png';
import Header from './Header';



class LandingPage extends Component {
    render() {
        return (
            <div className='landing-page'>
                <Header />
                <img src={jo} alt='Johanna Baguio' className='my-pic animated fadeIn slow' />

                <div className='banner-text'>

                    <h1 className='animated fadeIn slow'>Front-end Web Developer</h1>
                    <hr />
                    <p> HTML ⏐ CSS ⏐ JavaScript ⏐ React ⏐ NodeJs ⏐ Express ⏐ MySql </p>

                    <div className='social-links'>
                        {/* LinkedIn */}
                        <a href='https://www.linkedin.com/in/johanna-may-baguio-a8aa90174/' rel='noopener noreferrer' target='_blank'>
                            <i className="fa fa-linkedin-square" aria-hidden='true' />
                        </a>
                        {/* Github */}
                        <a href='https://github.com/johbaguio' rel='noopener noreferrer' target='_blank'>
                            <i className="fa fa-github-square" aria-hidden='true' />
                        </a>
                        {/* Instagram */}
                        <a href='https://www.instagram.com/johbaguio/' rel='noopener noreferrer' target='_blank'>
                            <i className="fa fa-instagram" aria-hidden='true' />
                        </a>
                        {/* Facebook */}
                        <a href='https://www.facebook.com/johbaguio' rel='noopener noreferrer' target='_blank'>
                            <i className="fa fa-facebook-square" aria-hidden='true' />
                        </a>
                    </div>
                </div>

            </div>

        )
    }
}

export default LandingPage;