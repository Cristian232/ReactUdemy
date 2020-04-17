import React, { Component } from 'react';
import './App.css';
import UserOutput from '../../UserOutput';
import styled from 'styled-components';
//import classes from './Person.module.css';
import Person from '../Persons/Person/Person';


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
        showtoggle : false
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

    conso = () => {
      console.log('Check '+  + ' ... ')
    }

  render(){

    let pers = null;

    if(this.state.showtoggle){
      pers = (
        <Person 
          persons = {this.state.persons}
          changed = {() => this.OnChangeEH()}
          clickk = {this.conso}
          key = {this.state.persons.id}
        />
      )  
    }

    return (
    
          <div className="App">
            <Cockpit
              lenght = {this.state.persons.length}
              showtoggle = {this.state.showtoggle}
              ToggleButton = {this.ToggleButton}
              persons = {this.state.persons}
              changed = {(event) => this.OnChangeEH}
            />

            {pers}

          </div>
      
    )
  }  
}

export default App;
