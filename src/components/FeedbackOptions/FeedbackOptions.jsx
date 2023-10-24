import React from 'react';
import styles from './FeedbackOptions.module.css';

class FeedbackOptions extends React.Component {
  render() {
    return (
      <ul className={styles.flex_container_list}>
        {this.props.options.map(option => {
          return (
            <li key={option}>
              <button
                type="button"
                className={styles.button_feedback}
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
