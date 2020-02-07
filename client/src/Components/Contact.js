import React, { Component } from 'react';
import { Form, ButtonToolbar, Button } from 'react-bootstrap';
import Header from './Header';
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
      message: '',
      sentNote: `Can't wait to get in touch with you, ${this.state.name}! Thank you.`
    });

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const formData = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
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
      <div className='contact-wrapper'>
        <Header />
        <h1 className='contact-title'> Let's connect, shall we? </h1>
        <div className='contact-container'>
          <div className='contact-form'>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Name </Form.Label>
                <Form.Group className='form-grp'>
                  <Form.Control required type="text" name='name' placeholder="Your name here" value={this.state.name} className='form-grp2' onChange={this.handleChange} />
                </Form.Group>

              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" name='email' value={this.state.email} placeholder="name@example.com" onChange={this.handleChange} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="3" name='message' value={this.state.message} onChange={this.handleChange} />
              </Form.Group>
              <ButtonToolbar>
                <Button variant="primary">Send</Button>
              </ButtonToolbar>
            </Form>
            <Connected message={this.state.sentNote} />
          </div>

          <div className='contact-options'>
            <div className='contact-address'>
              <h4> Where to find me</h4>
              <p>📍 Amsterdamvej 14, Copenhagen S,Denmark </p>
              <a
                href='mailto:johbaguio@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
                className='contact-option'
              >
                ✉️  johbaguio@gmail.com
                  </a>
              <p className='contact-option'> 📱 +45 29642002</p>
            </div>

            <div className='contact-socials'>
              {/* LinkedIn */}
              <a href='https://www.linkedin.com/in/johanna-may-baguio-a8aa90174/' rel='noopener noreferrer' target='_blank'>
                Let's connect<i className="fa fa-linkedin-square" aria-hidden='true' /> •
                  </a> <br />
              {/* Instagram */}
              <a href='https://www.instagram.com/johbaguio/' rel='noopener noreferrer' target='_blank'>
                Follow me<i className="fa fa-instagram" aria-hidden='true' /> •
                  </a> <br />
              {/* Facebook */}
              <a href='https://www.facebook.com/johbaguio' rel='noopener noreferrer' target='_blank'>
                Add me up<i className="fa fa-facebook-square" aria-hidden='true' />
              </a>
            </div>

          </div>

        </div>
      </div>


    );
  }
}

export default Contact;
