import React, { Component } from 'react';
import './WatchPage.css';

class WatchPage extends Component {
  render() {
    return (
      <div className='watchpage'>
        <section className='black-and-blue'>
            <iframe 
                title='blackandblue'
                width='560' 
                height='315' 
                src='https://www.youtube.com/embed/7Uu_pHFaeuo' 
                frameborder='0' 
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' 
                allowFullScreen
            >
            </iframe>
        </section>
        <section className='vacant-stories'>
            <iframe 
                title='vacantstories'
                width='560' 
                height='315' 
                src='https://www.youtube.com/embed/zvsYVJa-D_8' 
                frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' 
                allowfullscreen
            >
            </iframe>
        </section>
        <section className='live-video'>
            <iframe 
            title='livevideo'
            width='560' 
            height='315' 
            src='https://www.youtube.com/embed/6Phl_yT9XK4' 
            frameborder='0' 
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' 
            allowfullscreen
            >
            </iframe>
        </section>
      </div>
    );
  }
}

export default WatchPage;