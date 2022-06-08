import React from 'react';
import classes from './Footer.module.css';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';

export default function Header() {
    return (
        <Router>
        <div className={classes.foot}>
            <div className={classes.yellobox}>

            </div>
        </div>
        </Router>
    );
}