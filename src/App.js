import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput';
import styled from 'styled-components';



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
     
    Consol = () => {
      console.log(this.state.persons , 'asa pt 1');
      }

    Consol1 = () => {
      console.log(this.state.showtoggle);
    }

    ToggleButton = () => {
      const sst = this.state.showtoggle;
      this.setState ({showtoggle : !sst});
    }

  render(){



  

        const StyledButton = styled.button`
        border : 2px solid ${props => props.alt ? 'red' : 'navy'};
        padding : 10px;
        margin : 0 auto;
        display: block;
        align : center;
        background-color :${props => props.alt ? 'red' : 'blue'};
        color : ${props => props.alt ? 'pink' : 'white'};
        &:hover {
          background-color : ${props => props.alt ? 'pink' : 'cyan'};
          color :${props => props.alt ?'red' : 'blue'};
        `;

        const StyledDiv = styled.div`
        .red {
          background-color: blue;
      }
      
      .bold {
          background-color: blueviolet;
      }
      
      @media (min-width:500px) {
          .aa {
              width : 300px;
              margin: 10px auto;
              padding: 20px auto;
              
          }
      
          .UserOutput {
              padding: 20px 20px;
              margin: 10px auto;
              background-color : grey;
          }
      }
        `;

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    let pers = null;

    if(this.state.showtoggle){
       
      pers = (
        <StyledDiv>
         <div className = 'aa'>
         {this.state.persons.map((perso , index) =>{
        return <UserOutput 


         
         click = { () => this.deletePersH(index)}
         name = {this.state.persons[index].name} 
         userName = { this.state.persons[index].usern}
         key = {(this.state.persons[index].id)}
        changed = {(event) => this.OnChangeEH(event,this.state.persons[index].id)}
         >
           {console.log(this.state.persons , 'asa pt 1')}
         </UserOutput>
         
        }
         )}
        
        
        </div>
        </StyledDiv>)
      

     
   
   
    }

    return (
    
          <div className="App">
            
            <h1  className = {classes.join(' ')}>haha :)  back baby :))</h1>
            
            
            
            
            <StyledButton type='submit'
            alt = {this.state.showtoggle}
            onClick = {this.ToggleButton}
            > Show persons </StyledButton>
            
            {pers }
            {/* <UserOutput name={this.state.name} > </UserOutput>
            <UserOutput userName = 'Cristi' />
            <UserOutput userName = {this.state.usern}/> */}
            {console.log(this.state.persons , 'asa pt 2')}
          </div>
      
    )
  }  
}

export default App;
