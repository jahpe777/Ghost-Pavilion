import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (
      <div className='landingpage'>
        <section className='image-landingpage'>
            <Link to='/listen'>
                <img src={require('/Users/jahpe777/Projects/ghost-pavilion/src/images/Bleed on Sunset_Artwork.jpg')} alt='Bleed on Sunset Artwork' />
            </Link>
        </section>
      </div>
    );
  }
}

export default LandingPage;