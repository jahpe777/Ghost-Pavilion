import React, { Component } from 'react';
import './SignUpPage.css';

class SignUpPage extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        fetch('/api/form-submit-url', {
          method: 'POST',
          body: data,
        });
      }

  render() {
    return (
      <div className='signuppage'>
        <section className='image-signuppage'>
            <header>
                <h3>Mailing List</h3>
            </header>
            <div className='signup-detail'>
                <p>Hear about upcoming shows, free downloads and more!</p>
            </div>
            <form className='signup-form' onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Email</label>
                    <input placeholder="johnsmith@gmail.com" type="text" name='username' id='username' />
                </div>
                <button type='submit'>Sign Up</button>
            </form>
        </section>
      </div>
    );
  }
}

export default SignUpPage;