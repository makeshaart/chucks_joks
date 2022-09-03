import React from 'react';
import { useState, useEffect } from 'react';
import Button from '../button/Button';


const GetJoke = () => {
    const [jokes, setJokes] = useState([]);
    const [click, setClick] = useState(false);


    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then((response) => response.json())
            .then((result) => setJokes(result.value));
    }, [click])


    return (
        <div className='screen'>
            <div className='content'>
                <Button text='change joke' onClick={() => { setClick(!click) }} />
                <h2>{jokes}</h2>   
            </div>
        </div>
    );
}

export default GetJoke;