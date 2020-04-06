import React from 'react';
import classes from './Person.module.css';
import styled from 'styled-components';
import UserOutput from '../../../UserOutput';


const person = (props) => props.persons.map((perso , index) =>{

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




    return (
        (props.toggle) ? 
            <StyledDiv>
                <div 
                    className = 'aa'>
                    <UserOutput 
                    click = { () => props.delete(index)}
                    name = {perso.name} 
                    userName = {perso.usern}
                    id = {perso.id}
                    key = {(perso.id)}
                    changed = {props.changed}
                    />
                </div>
            </StyledDiv>
        : null
    )
    });



export default person;