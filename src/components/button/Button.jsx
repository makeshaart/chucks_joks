import React from 'react';
import { useState } from 'react';


const Button = ({ text, onClick }) => {

    const [state, setState] = useState(false)

    // function setState = {
 
    // }

    return (
        <button onClick={onClick} >{text}</button>
    );
}

export default Button;