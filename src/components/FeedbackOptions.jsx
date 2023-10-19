import React from 'react';

class FeedbackOptions extends React.Component {
  render() {
    return (
      <ul>
        {this.props.options.map(option => {
          return (
            <li key={option}>
              <button
                type="button"
                onClick={() => this.props.onLeaveFeedback(option)}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default FeedbackOptions;
