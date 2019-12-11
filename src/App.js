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


class App extends Component {

  constructor() {
    super();
    this.state = {
      shows: [
        {
          id: 1,
          venue: 'Los Globos',
          date: "2019-12-20T00:00:00.000Z",
      },
      {
          id: 2,
          venue: 'The Echo',
          date: "2020-01-10T00:00:00.000Z",
      },
      {
          id: 3,
          venue: 'The Smell',
          date: "2020-02-12T00:00:00.000Z",
      }
    ],
      subscribers: [
        {
          id: 1,
          email: 'james@gmail.com',
          emailDate: "2019-12-18T00:00:00.000Z",
      },
      {
          id: 2,
          email: 'bob@gmail.com',
          emailDate: "2020-01-12T00:00:00.000Z",
      },
      {
          id: 3,
          email: 'higgs@gmail.com',
          emailDate: "2020-02-14T00:00:00.000Z",
      }
    ],
      addNewSubscriber: email => {
        const newSubscriber = { id:uuidv4(), email, emailDate: new Date() }
        this.setState({ subscribers:[...this.state.subscribers, newSubscriber ]})
      }
    }
  }

  componentDidMount(){
    // fetch call to get the bands shows
    // .then(res=>res.json())
    // .then(shows=>this.setState({shows}))
    // fetch call to get allt he subscribers
    // .then(res=>res.json())
    // .then(subs=>this.setState({subscribers:subs}))
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