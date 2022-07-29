import {React} from 'react';
import classes from './Header.module.css';
import translateimg from '../../translateimg.png'
import logoimg from '../../logo.png';
import Login from '../../pages/login';

export default function Header() {

    return (
        <>
        <div className={classes.head}>
            <img className={classes.logoimg} src={logoimg}/>
            <a href="/"><h1 className={classes.org}>AICTE</h1></a>
            <div style={{ borderLeft:"2px solid white", height:"auto" , margin:"1.5vw 1vw 1.5vw 0"}}></div>
            <a href="/"><h1 className={classes.name}>ClgSearch.com</h1></a>
            <div className={classes.topoptions}>
            <h4><a className='colorNotChange' style={{color:"white"}} href='http://www.youtube.com' target='blank'>Home</a></h4>
                <h4><a className='colorNotChange' style={{color:"white"}} href='http://www.youtube.com' target='blank'>Rank Predictor</a></h4>
                <h4><a className='colorNotChange' style={{color:"white"}} href='http://www.youtube.com' target='blank'>Compare</a></h4>
                <h4><a className='colorNotChange' style={{color:"white"}}  href='http://www.youtube.com' target='blank'>Calendar</a></h4>
                <img className='translateimg' src={translateimg} />
                <button id='loginButton'><a style={{color: "black",textDecoration:"none"}} href='http://www.youtube.com' target='blank'>Login/Register</a></button>
        </div>
        </div>
        <div className={classes.navoptions}>
            <h4 className='subNavBar'><a className='colorNotChange' style={{color:"black",textDecoration:"none"}} href='http://www.youtube.com' target='blank'>NIRF</a></h4>
            <h4 className='subNavBar'><a className='colorNotChange' style={{color:"black",textDecoration:"none"}} href='http://www.youtube.com' target='blank'>Cities</a></h4>
            <h4 className='subNavBar'><a className='colorNotChange' style={{color:"black",textDecoration:"none"}} href='http://www.youtube.com' target='blank'>Courses</a></h4>
            <h4 className='subNavBar'><a className='colorNotChange' style={{color:"black",textDecoration:"none"}} href='http://www.youtube.com' target='blank'>Degree</a></h4>
            <h4 className='subNavBar'><a className='colorNotChange' style={{color:"black",textDecoration:"none"}} href='http://www.youtube.com' target='blank'>Exams</a></h4>
            <h4 className='subNavBar'><a className='colorNotChange' style={{color:"black",textDecoration:"none"}} href='http://www.youtube.com' target='blank'>Scholarships</a></h4>
        </div>
        <div style={{height:"5vw"}}></div>
        </>
    );
}
