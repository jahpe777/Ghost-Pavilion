import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <section className='footer'>
                <ul className='links'>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/GhostPavilion'>
                            <img className='icons' src='images/facebook.png' />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href='https://www.twitter.com/ghost_pavilion'>
                            <img className='icons' src='images/twitter.png' />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/ghost_pavilion'>
                            <img className='icons' src='images/instagram.png' />   
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/channel/UCr56a0HjTtBCzkTu1rgRQWg'>
                            <img className='icons' src='images/youtube.png' />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href='https://soundcloud.com/ghost-pavilion'>
                            <img className='icons' src='images/soundcloud.png' />   
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href='https://ghostpavilion.bandcamp.com/'>
                            <img className='icons' src='images/bandcamp.png' />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href='mailto:info@ghostpavilion.com'>
                            <img className='icons' src='images/email.png' />
                        </a>
                    </li>
                </ul>
        </section>
    );
}

export default Footer;