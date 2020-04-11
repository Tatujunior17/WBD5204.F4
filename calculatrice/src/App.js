import React, { Component } from 'react';
import './App.css';
import Resultat from "./components/Resultat";
import Clavier from "./components/Clavier";

class App extends Component {
  constructor(){
    super();

    this.state = {
      resultat: ""
    }
  }

  onClick = button => {

    if(button === "="){
      this.calcule()
    }

    else if(button === "Clear"){
      this.clear()
    }


    else {
      this.setState({
        resultat: this.state.resultat + button
      })
    }
  };


  calcule = () => {
    var verifResultat = ''
    if(this.state.resultat.includes('--')){
      verifResultat = this.state.resultat.replace('--','+')
    }

    else {
      verifResultat = this.state.resultat
    }

    try {
      this.setState({
        resultat: (eval(verifResultat) || "" ) + ""
      })
    } catch (e) {
      this.setState({
        resultat: "erreur"
      })

    }
  };

  clear = () => {
    this.setState({
      resultat: ""
    })
  };


  render() {
    return (
        <div>
          <div className="calculatrice-body">
            <Resultat resultat={this.state.resultat}/>
            <Clavier onClick={this.onClick}/>
          </div>
        </div>
    );
  }
}

export default App;
