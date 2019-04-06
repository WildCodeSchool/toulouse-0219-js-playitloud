import React from 'react';

class Cards extends React.Component {

  render() {
    return (
      <figure className="album">
        <img src={this.props.image} />
        <figcaption id={this.props.id} onClick={ () => this.props.click(this.props.id) }>
          <h3>{this.props.name}</h3>
          <h5>{this.props.artist}</h5>
        </figcaption>
      </figure>
    )
  }

}


export default Cards;