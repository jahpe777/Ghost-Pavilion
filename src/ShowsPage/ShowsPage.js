import React, { useState, useContext } from 'react';
import './ShowsPage.css';
import { Context } from '../Context';

const ShowsPage = () => {
    const [ shows ] = useContext(Context)
    return (
      <div className='showspage'>
        <section className='image-showspage'>
            {shows.map(show => (
                <Show key={ shows.id } show={ shows.show } date={ shows.date } />
            ))}
        </section>
      </div>
    );
  }

export default ShowsPage;