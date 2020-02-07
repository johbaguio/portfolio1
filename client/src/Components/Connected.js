import React, { Component } from 'react';

export class Subscribed extends Component {
  render() {
    return (
      <React.Fragment>
        <p className='subscribed'>{this.props.message}</p>
      </React.Fragment>
    );
  }
}

export default Subscribed;
