import React from 'react';
import classes from './Header.module.css';
import translateimg from '../../translateimg.png'
import logoimg from '../../logo.png';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';

export default function Header() {
    return (
        <Router>
        <div className={classes.head}>
            <img className={classes.logoimg} src={logoimg}/>
            <h1 className={classes.org}>AICTE</h1>
            <div style={{ borderLeft:"2px solid white", height:"auto" , margin:"1.5vw 1vw 1.5vw 0"}}></div>
            <h1 className={classes.name}>ClgSearch.com</h1>
            <div className={classes.topoptions}>
                <h4>Home</h4>
                <h4 style={{width:"auto" , whiteSpace:"nowrap"}}>Rank Predictor</h4>
                <h4>Compare</h4>
                <h4>Calender</h4>
                <img className={classes.translateimg} src={translateimg} />
                <button>Login/Register</button>
            </div>
        </div>
        <div style={{height:"7vw"}}></div>
        </Router>
    );
}