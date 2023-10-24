import React from 'react';

class Statistics extends React.Component {
  render() {
    return (
      <ul>
        <li>Good: {this.props.good}</li>
        <li>Neutral: {this.props.neutral}</li>
        <li>Bad:{this.props.bad} </li>
        <li>Total: {this.props.total}</li>
        <li>Positive feedback: {this.props.positivePercentage}%</li>
      </ul>
    );
  }
}

export default Statistics;
