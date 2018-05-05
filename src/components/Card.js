import React, { Component } from 'react';
import closeIcon from './../assets/img/icon-close.svg'

class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {
    };
  }

  render() {
    return (

      <div className="card">
        <div className="card__details">
          <div className="card__title">{this.props.title}</div>
          <div className="card__desc">{this.props.desc}</div>
        </div>
        <button className="card__button" onClick={() => {this.props.deleteItem(this.props.cardId)}}>
          <img src= {closeIcon} alt=""/>
        </button>
      </div>

    );
  }

}

export default Card;