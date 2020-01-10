import React, { Component } from 'react';
import './ListenPage.css';

class ListenPage extends Component {
  render() {
    return (
      <div className='listenpage'>
        <section>
            <iframe
                title='bleed-on-sunset'
                border='0' 
                width='350px' 
                height='442px' 
                src='https://bandcamp.com/EmbeddedPlayer/track=77723839/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/' 
                seamless>
                <a href='http://ghostpavilion.bandcamp.com/track/bleed-on-sunset'>Bleed on Sunset by Ghost Pavilion</a>
            </iframe>
        </section>
        <section>
            <iframe 
                title='oblivion'
                border='0' 
                width='350px' 
                height='470px' 
                src='https://bandcamp.com/EmbeddedPlayer/album=2411569131/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/' 
                seamless>
                <a href='http://ghostpavilion.bandcamp.com/album/oblivion'>Oblivion by Ghost Pavilion</a>
            </iframe>
        </section>
        <section>
            <iframe 
                title='traces'
                border='0' 
                width='350' 
                height='470px' 
                src='https://bandcamp.com/EmbeddedPlayer/album=3727972298/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/' 
                seamless>
                <a href='http://ghostpavilion.bandcamp.com/album/traces'>Traces by Ghost Pavilion</a>
            </iframe>
        </section>
      </div>
    );
  }
}

export default ListenPage;