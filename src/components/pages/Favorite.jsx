import React, { useEffect, useState } from 'react';
import Button from '../button/Button';



const Favorite = () => {
    const jokeList=JSON.parse(localStorage.getItem('jokes'));
    const [favorite, setList] = useState(jokeList);

    if (!favorite) {
        return <div className='content'><h2>YOU DIDN' T CHOOSE YOUR FAVORITE JOKE</h2></div>
    }


    return (
        <div className='screen'>
            <div className='content'>
                <Button text='clear all' onClick={() => { localStorage.clear(setList()) }} />
                {favorite.map((joke, n) => (
                    <div key={joke.id}  >
                        <p> {++n}. {joke.text} </p>
                        <Button text='delete' key={joke.id} onClick={(e)=>{
                       const jokeDelete=favorite.filter((element, index)=> Number(e.target.id ) !== index)
                       setList(jokeDelete);
                       localStorage.setItem('jokes', JSON.stringify(jokeDelete))
                    }} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favorite;