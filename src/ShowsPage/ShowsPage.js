import React, { Component } from 'react';
import './ShowsPage.css';
import BandContext from '../Contexts/BandContext';

class ShowsPage extends Component {
    static contextType = BandContext;

    render() {
        return (
            <div className='showspage'>
                <section className='image-showspage'>
                    {this.context.shows.map(show => {
                        const d = new Date(show.datetime);
                        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        return (
                        <div key={ show.id }> 
                            <h2>{ `${ months[d.getMonth()] } ${ d.getDate() }, ${ d.getFullYear() }` }</h2>
                            <h5>{ show.venue.city }, { show.venue.region }</h5>
                            <h5>{ show.venue.name }</h5>
                            <br/>
                        </div>
                    )})}
                </section>
            </div>
            ) 
        }
    }

export default ShowsPage;