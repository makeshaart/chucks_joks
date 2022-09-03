import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '../button/Button';


const GetList = () => {
    const [jokes, setJokes] = useState([]);
    const [click, setClick] = useState(false);
    const [isActive, setIsActive] = useState(false);


    let i = 0;
    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then((response) => response.json())
            .then((result) => setJokes(
                [
                    ...jokes,
                    {
                        text: result.value,
                    }
                ]
            ));
    }, [click])



    const handleAddFavorite = (joke) => {
        setIsActive(!isActive)
        const favorites = localStorage.getItem('jokes');
        if (favorites) {
            const parsedFavorites = JSON.parse(favorites);
            parsedFavorites.push(joke);
            localStorage.setItem('jokes', JSON.stringify(parsedFavorites))
            return
        }
        const x = [joke];
        localStorage.setItem('jokes', JSON.stringify(x))
    }

    return (
        <div className='screen'>
            <div className='content'>
                <Button text='GET' onClick={() => { setClick(!click) }} />
                <div>{jokes.map((joke, n) => {
                    for (let i = 0; i < 10; i++) {
                        return <div key={joke.i}>
                            <p>{++n}. {joke.text}</p>
                            <Button text='add favorite' key={joke.i} onClick={(event) => { handleAddFavorite(joke) }} />
                        </div>
                    }
                })}
                </div>
            </div>
        </div>
    );
}

export default GetList;