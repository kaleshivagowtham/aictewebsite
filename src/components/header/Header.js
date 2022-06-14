import {React} from 'react';
import classes from './Header.module.css';
import translateimg from '../../translateimg.png'
import logoimg from '../../logo.png';
import Login from '../login/Login';

export default function Header() {

    return (
        <>
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
                <button onClick={() => {return <div><p>hello</p></div>}}>Login/Register</button>
            </div>
        </div>
        <div className={classes.navoptions}>
            <h4 style={{margin:"0.5vw 0 0.5vw 0"}}>NIRF</h4>
            <h4 style={{margin:"0.5vw 0 0.5vw 0"}}>Cities</h4>
            <h4 style={{margin:"0.5vw 0 0.5vw 0"}}>Courses</h4>
            <h4 style={{margin:"0.5vw 0 0.5vw 0"}}>Degree</h4>
            <h4 style={{margin:"0.5vw 0 0.5vw 0"}}>Exams</h4>
            <h4 style={{margin:"0.5vw 0 0.5vw 0"}}>Scholarships</h4>
        </div>
        <div style={{height:"5vw"}}></div>
        </>
    );
}
