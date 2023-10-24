import React from 'react';

class Notification extends React.Component {
  render() {
    return <h3>{this.props.message}</h3>;
  }
}

export default Notification;
