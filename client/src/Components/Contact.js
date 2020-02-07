import React, { Component } from 'react';
import Connected from './Connected';
import axios from 'axios';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      name: '',
      email: '',
      message: `Thank you for subscribing to our newsletter ${this.state.name}!`
    });

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const formData = {
      name: this.state.name,
      email: this.state.email
    };
    console.log('formData', formData);

    axios
      .post('/api/pages/subscribe', formData, config)
      .then(msg => console.log(msg));
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className='upper-right'></div>
        <span className='dot'></span>
        <div className='newsletter-container'>
          <div className='newsletter-page'>
            <p className='subscribe-title'> Subscribe to our newsletter </p>
            <form onSubmit={this.handleSubmit} className='form-container'>
              <input
                type='text'
                placeholder='Name'
                required
                value={this.state.name}
                className=' email-text '
                name='name'
                onChange={this.handleChange}
              />
              <input
                type='email'
                placeholder='Email address'
                required
                value={this.state.email}
                className=' email-text '
                name='email'
                onChange={this.handleChange}
              />
              <input type='submit' className='submit-btn' value='Submit' />
            </form>
          </div>
          <Connected message={this.state.message} />
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
