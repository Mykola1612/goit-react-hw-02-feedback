import React from 'react';

class Section extends React.Component {
  render() {
    return (
      <section className="container">
        <h2>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}

export default Section;
