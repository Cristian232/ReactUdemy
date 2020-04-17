import React from 'react';
import styled from 'styled-components';
import Person from '../Persons/Person/Person';

const cockpit = (props) => {

    const classes = [];

    if(props.length <= 2){
      classes.push('red');
    }

    if(props.length <= 1){
      classes.push('bold');
    }

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


return (

    <div >
        <h1  className = {classes.join(' ')}>
            haha :)  back baby :))
        </h1>
        
        <StyledButton type='submit'
            alt = {props.showtoggle}
            onClick = {props.ToggleButton}>
            Show persons
        </StyledButton>



    </div>
);

}

export default cockpit;