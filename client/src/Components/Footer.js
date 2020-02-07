import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <p className='loc'> 📍 Copenhagen, Denmark</p>
                <p>✉️  johbaguio@gmail.com</p>
                <h4> © 2019 JOHANNA BAGUIO </h4>
                <div className='social-links-footer'>
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
        )
    }
}

export default Footer;