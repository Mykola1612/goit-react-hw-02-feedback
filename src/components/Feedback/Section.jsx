import React from 'react';
import styles from './Section.module.css';
class Section extends React.Component {
  render() {
    return (
      <section className={styles.container_section}>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}

export default Section;
