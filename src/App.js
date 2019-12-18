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
      shows: [],
      subscribers: [],

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
    // fetch call to get all the subscribers
  //   fetch('/api/emails', {
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     method: 'POST',
  //     body: email,
  // });
    // .then(res=>res.json())
    // .then(subs=>this.setState({subscribers:subs}))
  }


//  //run api calls within componentDidMount
//  componentDidMount() {
//   //Promise.all will run both fetch methods
//     Promise.all([
//       fetch(`${config.API_ENDPOINT}/notes`),
//       fetch(`${config.API_ENDPOINT}/folders`)
//     ])
//     //then is for an "accepted" item
//       .then(([notesRes, foldersRes]) => {
//         //if noteRes call is not successful you'd return the json and run a rejected event
//         if (!notesRes.ok)
//           return notesRes.json().then(e => Promise.reject(e));
//         //if folderRes call is not successful you'd return the json and run a rejected event
//         if (!foldersRes.ok)
//           return foldersRes.json().then(e => Promise.reject(e));
//         //if notesRes and folderRes are successful you'd return the json
//           return Promise.all([notesRes.json(), foldersRes.json()]);
//       })
//       //then you'd change state of notes and folder
//       .then(([notes, folders]) => {
//         this.setState({notes, folders});
//       })
//       //if changestate is not successful, run an error
//       .catch(error => {
//         console.error({error});
//       });
//   }


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