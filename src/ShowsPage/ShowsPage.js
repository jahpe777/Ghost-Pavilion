import React, { Component } from 'react';
import './ShowsPage.css';
import BandContext from '../Contexts/BandContext';

class ShowsPage extends Component {
    static contextType = BandContext;

    render() {
        return (
        <BandContext.Consumer>
            {/* {(value) => ( */}
                <div className='showspage'>
                <section className='image-showspage'>
                    {this.BandContext.shows.map(show => (
                        <div key={ show.id }> 
                            <h3>venue={ show.venue }</h3> 
                            <h3>date={ show.date }</h3>
                        </div>
                    ))}
                </section>
                </div>
            )}  
        </BandContext.Consumer>
        );
    }
}

export default ShowsPage;