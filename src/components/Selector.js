import React, { Component } from 'react';
import * as firebase from 'firebase'
import addIcon from './../assets/img/icon-add.svg'

class Selector extends Component {

  constructor(props) {
    super(props)
    this.state = {
      moduleId: null,
      modules: []
    };
  }

  componentDidMount() {
    const dbTemplates = firebase.database().ref().child('templates');

    dbTemplates.on('value', snapshot => {
      this.setState ({ modules: Object.values(snapshot.val()) });
    })

  }

  render() {
    return (

      <div className="selector">
      <select className="selector__select" defaultValue="disabled" onChange={(event) => this.setState({moduleId: event.target.value})}>
        <option value="disabled" disabled>Elige un módulo</option>
        {this.state.modules.map((item) => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))}
      </select>

      <button className="selector__button-icon" onClick={() => this.props.addItem(this.state.moduleId)}>
        <img src= {addIcon} alt=""/>
      </button>
      </div>

    );
  }

}

export default Selector;