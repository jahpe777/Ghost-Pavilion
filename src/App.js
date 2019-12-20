import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import uuidv4 from 'uuid/v4';

import './App.css';

import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
import WatchPage from './WatchPage/WatchPage';
import ListenPage from './ListenPage/ListenPage';
import ShowsPage from './ShowsPage/ShowsPage';
import SignUpPage from './SignUpPage/SignUpPage';

import BandContext from './Contexts/BandContext';
import config from './config'

class App extends Component {
  constructor() {
    super();
    this.state = {
      shows: [],
      subscribers: [],

      addNewSubscriber: email => {
        const newSubscriber = { id:uuidv4(), email, emailDate: new Date() }
        fetch(`${config.API_ENDPOINT}/api/emails`, {
          headers: {
              'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({ email })
      })
        .then(res => {
        this.setState({ subscribers:[...this.state.subscribers, newSubscriber ]})
      })
        .catch(err => console.log(err));
      }
    }
  }

  componentDidMount() {
    fetch(config.BANDS_API_ENDPOINT, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error))
        }
        return res.json()
      })
      .then(shows => {
        this.setState({ shows: shows.reverse() })
        console.log(shows)
        console.log(this.state.shows)
      })
      .catch(error => {
        console.error(error)
        this.setState({ error })
      })
  }

  render() {
    return (
      <BandContext.Provider value={ this.state }>
        <div className = 'App'>
          <header className = 'App-Header'>
            <Route path='/' component={ NavBar }/> 
          </header>
          <main className='Header'>
            <Route exact path='/' component={ LandingPage }/>
            <Route exact path='/watch' component={ WatchPage }/>
            <Route exact path='/listen' component={ ListenPage }/>
            <Route exact path='/shows' component={ ShowsPage }/>
            <Route exact path='/signup' component={ SignUpPage }/>
          </main>
          <footer>
            <Route path='/' component={ Footer }/> 
          </footer>
        </div>
      </BandContext.Provider>
    );
  }
}

export default App;