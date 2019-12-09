import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <section className='footer'>
                <ul className='links'>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/GhostPavilion'>
                            <i className='fab fa-facebook'></i>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href='https://www.twitter.com/ghost_pavilion'>
                            <i className='fab fa-twitter'></i>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/ghost_pavilion'>
                            <i className='fab fa-instagram'></i>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/channel/UCr56a0HjTtBCzkTu1rgRQWg'>
                            <i className='fab fa-youtube'></i>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href='https://soundcloud.com/ghost-pavilion'>
                            <i className='fab fa-soundcloud'></i>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href='https://ghostpavilion.bandcamp.com/'>
                            <i className='fab fa-bandcamp'></i>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href='mailto:info@ghostpavilion.com'>
                            <i className='far fa-envelope'></i>
                        </a>
                    </li>
                </ul>
        </section>
    );
}

export default Footer;