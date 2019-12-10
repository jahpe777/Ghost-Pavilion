import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (
      <div className='landingpage'>
        <section className='image-landingpage'>
            <Link to='/listen'>
                <img src='images/bleed_on_sunset_artwork.jpg' alt='Bleed on Sunset Artwork' />
            </Link>
        </section>
      </div>
    );
  }
}

export default LandingPage;