import React, { Component } from 'react';
import './SignUpPage.css';
import BandContext from '../Contexts/BandContext';

class SignUpPage extends Component {
    static contextType = BandContext;
    
    handleSubmit = event => {
        event.preventDefault();
        
        const email = event.target.email.value;

        this.context.addNewSubscriber(email);

        console.log(email)
        /*fetch('/api/form-submit-url', {
            method: 'POST',
            body: data,
        });*/

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
                        <label htmlFor="email">Email</label>
                        <input placeholder="johnsmith@gmail.com" type="text" name='email' id='email' />
                    </div>
                    <button type='submit'>Sign Up</button>
                </form>
            </section>
        </div>
        );
    }
}

export default SignUpPage;