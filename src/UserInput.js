import React from 'react';

const Userinput = (props) => {

    const mystyle = {
        border : '2px solid red',
        //padding : '8px',
        margin : '0 auto',
        display: 'block',
        align : 'center'
        
    };

    return (
        <div style ={mystyle}>
            <label>Userinput:</label>
            <input type="text" onChange={props.changed} /> 
        </div>
    )
    
};




export default Userinput;
