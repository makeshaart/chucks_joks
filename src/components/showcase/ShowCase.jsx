import React from 'react';
import './ShowCase.css';
import { Routes , Route } from "react-router-dom";
import GetList from "../pages/GetList"; 
import GetJoke from "../pages/GetJoke";
import SlideShow from "../pages/SlideShow";
import Favorite from '../pages/Favorite';


const ShowCase = ( ) => { 
    return(
        <Routes className='screen'>
            <Route path="/getList" element={<GetList />} />
            <Route path="/getJoke" element={<GetJoke/>} />
            <Route path="/slideshow" element={<SlideShow />} />
            <Route path="/favorite" element={<Favorite />} /> 
            <Route path="/*" element={<GetList />} /> 
        </Routes>
    );
}; 

export default ShowCase;