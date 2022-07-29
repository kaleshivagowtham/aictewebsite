import React from 'react';
import classes from './Loading.module.css';

export default function Loading() {

    const thought = () => {
        const randNum = Math.random()*10 + 1;
        for( let i = 1; i<= 10 ; i++){
            if(randNum === i){
                return <p>{i}</p>
            }
        }
    }
    return (
        <div className={classes.clgSrch}></div>
    )
}