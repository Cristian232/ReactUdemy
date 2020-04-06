import React, { Component } from 'react';
import './App.css';
import UserOutput from '../../UserOutput';
import styled from 'styled-components';
//import classes from './Person.module.css';


import Cockpit from '../Cockpit/Cockpit';



class App extends Component {


    state = 
      {
        persons : [ 
          { id : 'asf',
            name : 'hello' ,
            usern : 'Cristian'},
          {id : 'asf1',
            name : 'hello0' ,
          usern : 'Cristiann'},
          {id : 'asf4',
            name : 'hello00' ,
          usern : 'Cristi'}],
        showtoggle : 'false'
      };

     

    deletePersH = (persindex) => {
      const perss = [...this.state.persons] ;
      perss.splice(persindex,1);
      this.setState({persons : perss});
    };
   

    OnChangeEH = (event,id) => {
    
      const persindex = this.state.persons.findIndex(p => (
        p.id === id
      ) );

      const changedpers = this.state.persons[persindex];

      changedpers.usern = event.target.value;

      const personss = [...this.state.persons];
      personss[persindex].usern = changedpers.usern; 
      
     this.setState ( {
        persons : personss
    })

    }
    

    ToggleButton = () => {
      const sst = this.state.showtoggle;
      this.setState ({showtoggle : !sst});
    }

  render(){

    let pers = null;

    if(this.state.showtoggle){
       
    }

    return (
    
          <div className="App">
            <Cockpit
              lenght = {this.state.persons.length}
              showtoggle = {this.state.showtoggle}
              ToggleButton = {() => this.ToggleButton()}
              persons = {this.state.persons}
              changed = {(event) => this.OnChangeEH(event,id)}
            />
          </div>
      
    )
  }  
}

export default App;
