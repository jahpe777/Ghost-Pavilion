import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
import WatchPage from './WatchPage/WatchPage';
import ListenPage from './ListenPage/ListenPage';
import ShowsPage from './ShowsPage/ShowsPage';
import SignUpPage from './SignUpPage/SignUpPage';


class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <header className = 'App-Header'>
          <Route path='/' component={NavBar}/> 
        </header>
        <main className='Header'>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/watch' component={WatchPage}/>
          <Route exact path='/listen' component={ListenPage}/>
          <Route exact path='/shows' component={ShowsPage}/>
          <Route exact path='/signup' component={SignUpPage}/>
        </main>
        <footer>
          <Route path='/' component={Footer}/> 
        </footer>
      </div>
    );
  }
}

export default App;