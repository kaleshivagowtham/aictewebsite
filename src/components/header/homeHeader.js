import {React , useState} from 'react';
import './homeHeader.css';
import translateimg from '../../translateimg.png'
import logoimg from '../../logo.png';
import Login from '../../pages/login';
import Home from '../../pages/home';
import Calendar from '../../pages/calendar';

export default function Header() {

    const [cities, setCities] = useState(false);

    const [navbar , setNavbar] = useState(false);
    const changeBackground = () => {
        if(window.scrollY >= 20){
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    };
    window.addEventListener('scroll', changeBackground);

    return (
      <div>
        <div className={ navbar ? 'headactive' : 'head'}>
            <img className={ navbar ? 'logoimgactive' : 'logoimg'} src={logoimg}/>
            <h1 className={ navbar ? 'orgactive' : 'org'}>AICTE</h1>
            <div className={ navbar ? 'lineactive' : 'line'} style={{}}></div>
            <h1 className={ navbar ? 'namesactive' : 'names'}>ClgSearch.com</h1>
            <nav className={ navbar ? 'topoptionsactive' : 'topoptions'}>
                <h4><a className={navbar ? 'colorChange' : 'colorNotChange'} href='http://www.youtube.com' target='blank'>Home</a></h4>
                <h4><a className={navbar ? 'colorChange' : 'colorNotChange'} href='http://www.youtube.com' target='blank'>Rank Predictor</a></h4>
                <h4><a className={navbar ? 'colorChange' : 'colorNotChange'} href='http://www.youtube.com' target='blank'>Compare</a></h4>
                <h4><a className={navbar ? 'colorChange' : 'colorNotChange'}  href='http://www.youtube.com' target='blank'>Calendar</a></h4>
                <img style={{userSelect:"none",WebkitUserSelect:"none",cursor:"pointer"}} className={navbar ? 'translateimgactive' : 'translateimg'} src={translateimg} />
                <button id='loginButton'><a style={{color: "black",textDecoration:"none"}} href='http://www.youtube.com' target='blank'>Login/Register</a></button>
        </nav>
        </div>
        <div className={navbar ? 'navoptionsactive' : 'navoptions' }>
            <h4 className='subNavBar'><a className='colorNotChange' style={{color:"black",textDecoration:"none"}} href='http://www.youtube.com' target='blank'>NIRF</a></h4>
            <h4 className='subNavBar'><a className='colorNotChange' style={{color:"black",textDecoration:"none"}} href='http://www.youtube.com' target='blank'>Cities</a></h4>
            <h4 className='subNavBar'><a className='colorNotChange' style={{color:"black",textDecoration:"none"}} href='http://www.youtube.com' target='blank'>Courses</a></h4>
            <h4 className='subNavBar'><a className='colorNotChange' style={{color:"black",textDecoration:"none"}} href='http://www.youtube.com' target='blank'>Degree</a></h4>
            <h4 className='subNavBar'><a className='colorNotChange' style={{color:"black",textDecoration:"none"}} href='http://www.youtube.com' target='blank'>Exams</a></h4>
            <h4 className='subNavBar'><a className='colorNotChange' style={{color:"black",textDecoration:"none"}} href='http://www.youtube.com' target='blank'>Scholarships</a></h4>
        </div>
      </div>
    );
}