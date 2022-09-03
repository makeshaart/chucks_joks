import React, { useState, useEffect } from "react";
import { Link, Router, Routes } from "react-router-dom";
import "./Menu.css";


const Menu = (props) => {
    return (
        <div className="menu_bar">
            <Link to='/getList'>get list</Link>
            <Link to='/getJoke'>get joke</Link>
            <Link to='/slideshow'>scroll jokes</Link>
            <Link to='/favorite'>favorite jokes</Link>
        </div>
    );
}

export default Menu;