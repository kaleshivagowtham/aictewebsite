import React from 'react';
import classes from './Calendar.module.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function Calender() {
    
    const [yrstrt,yrend] = [21,22];
    const [anulyrstrt,anulyrend] = [22,23];
    
    return(
        <>
            <Header />
            <h3 style={{position:"relative",width:"15.8vw" ,textAlign:"left", left:"5%"}}>Academic Calendar (20{yrstrt} - {yrend})</h3>
            <div className={classes.calendarContainer}>
                <h3>Annual Academic Calendar (20{anulyrstrt} - {anulyrend})</h3>
            </div>
            <Footer />
        </>
    )
}