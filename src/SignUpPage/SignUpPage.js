import React, { Component } from 'react';
import './SignUpPage.css';
import BandContext from '../Contexts/BandContext';

class SignUpPage extends Component {
    static contextType = BandContext;
    
    handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        this.context.addNewSubscriber(email);
        this.form.reset();
        alert('Thanks for signing up!');

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
                    <br />
                </header>
                <div className='signup-detail'>
                    <p>Hear about upcoming shows, free downloads and more!</p>
                </div>
                <br />
                <form 
                    className='signup-form' 
                    ref={form => this.form = form} 
                    onSubmit={this.handleSubmit}
                >
                        <label htmlFor="email">Email</label>
                        <input placeholder="johnsmith@gmail.com" type="text" name='email' id='email' />
                        <br />
                    <button type='submit' >Sign Up</button>
                </form>
            </section>
        </div>
        );
    }
};

export default SignUpPage;