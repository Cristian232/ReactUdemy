import React from 'react';
import './UserOutput.css'; 
import Userinpp from './UserInput';

const UserOutput = (props) => {

    return (
        <div className = "UserOutput" >
            <p>1..for delete press here =>
                 <span onClick={props.click}>('_')</span></p>
            <Userinpp changed = {props.changed} > </Userinpp>
            <p>1/2 {props.name} .</p>
            <p>2...{props.userName}</p>
            <p>2/2...{props.userName}</p>
        </div>
    )

}

export default UserOutput;