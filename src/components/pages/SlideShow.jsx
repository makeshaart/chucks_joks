import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import {  useIntervalWhen } from 'rooks';


const SlideShow = () => {

    const [joke, setJoke] = useState([]);
    const [delay, setDelay] = useState()
    const [isPlaying, setPlaying] = useState(false)
    

    useIntervalWhen(
        () => {
            fetch('https://api.chucknorris.io/jokes/random')
            .then((response) => response.json())
            .then((result) => setJoke(result.value));
        }, 
        3000,
        isPlaying ? delay : null,
      )
    
    return (
        <div className='screen'>
            <div className='content'>
                <h2>{joke}</h2>
                <Button text ={isPlaying ? 'pause' : 'play'} onClick={() => setPlaying(!isPlaying)} />
            </div>
        </div>
    );
}

export default SlideShow;  