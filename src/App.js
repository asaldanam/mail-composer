import React, { Component } from 'react';
import * as firebase from 'firebase';

import './assets/styles/App.css';

import Selector from './components/Selector';
import Card from './components/Card';

class App extends Component {

  constructor() {
    super()
    this.state = {
      emailcomp: [],
    };
  };

  render() {
    return (
      <div className="app__container">
        
        <div className="app__imagebox">
          <div className="app__imagecontainer">
            {this.state.emailcomp.map((moduleImg, index) => (
              <img
                key={'module-' + index}
                src={moduleImg.img}
                alt="module img" />
            ))}
          </div>
        </div>

        <div className="app__modulebox">

          <Selector 
            addItem={this.addModule.bind(this)} />

          <div className="modules">
            {this.state.emailcomp.map((moduleCard, index) => (
              <Card 
                key={'module-' + index}
                cardId={index}
                title={moduleCard.name}
                desc={moduleCard.desc}
                deleteItem={this.deleteModule.bind(this)}/>
            ))}
          </div>

          <div className="copybutton">
            <button onClick={() => this.copyToClipboard()} > Copiar HTML al portapapeles </button>
          </div>
        
        </div>

      </div>
    );
  }

  // App methods

  deleteModule(moduleIndex) {
    this.setState({
      emailcomp: this.state.emailcomp.filter((_, i) => i !== moduleIndex)
    })
    console.log(this.state.emailcomp.filter((_, i) => i !== moduleIndex));
  }

  addModule(moduleId) {
    const dbTemplates = firebase.database().ref().child('templates');

    if (moduleId) {
      dbTemplates.child(moduleId).on('value', snapshot => {
        this.setState({
          emailcomp: [...this.state.emailcomp, snapshot.val()]
        })
      })
    }
  }

  copyToClipboard() {
    const dbLayouts = firebase.database().ref().child('layouts');
    var moduleTemplates = this.state.emailcomp.map(function(item) {
      return item.template;
    })

    dbLayouts.on('value', snapshot => {
      let layout = snapshot.val();
      let email = layout.header.template + moduleTemplates.join('') + layout.footer.template

      navigator.clipboard.writeText(email)
        .then(() => {
          console.log('Async: Copying to clipboard was successful!');
        }, 
        err => {
          console.error('Async: Could not copy text: ', err);
        });
      
    });

  }

}

export default App;
