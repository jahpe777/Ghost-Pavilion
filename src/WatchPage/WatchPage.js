import React, { Component } from 'react';
import './WatchPage.css';

class WatchPage extends Component {
  render() {
    return (
      <div className='watchpage'>
        <section className='black-and-blue'>
            <iframe 
                title='blackandblue'
                width='840' 
                height='473' 
                src='https://www.youtube.com/embed/7Uu_pHFaeuo' 
                frameBorder='0' 
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' 
                allowFullScreen
            >
            </iframe>
        </section>
        <section className='vacant-stories'>
            <iframe 
                title='vacantstories'
                width='840' 
                height='473' 
                src='https://www.youtube.com/embed/zvsYVJa-D_8' 
                frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' 
                allowFullScreen
            >
            </iframe>
        </section>
        <section className='live-video'>
            <iframe 
            title='livevideo'
            width='840' 
            height='473' 
            src='https://www.youtube.com/embed/6Phl_yT9XK4' 
            frameBorder='0' 
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' 
            allowFullScreen
            >
            </iframe>
        </section>
      </div>
    );
  }
}

export default WatchPage;