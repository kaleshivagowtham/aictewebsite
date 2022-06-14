import {React , useState} from 'react';
import './homeHeader.css';
import translateimg from '../../translateimg.png'
import logoimg from '../../logo.png';
import Login from '../login/Login';
import Home from '../../Home/Home';
import Calendar from '../calendar/Calendar';

export default function Header() {

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
            <div className={ navbar ? 'topoptionsactive' : 'topoptions'}>

                <h4>Home</h4>
                <h4 style={{width:"auto" , whiteSpace:"nowrap"}}>Rank Predictor</h4>
                <h4>Compare</h4>
                <h4>Calender</h4>
                <img className={'translateimg'} src={translateimg} />
                <button style={{cursor:"pointer"}} id='loginButton'>Login/Register</button>
            </div>
        </div>
        <div className={navbar ? 'navoptionsactive' : 'navoptions' }>
            <h4 style={{margin:"0.5vw 0 0.5vw 0"}}>NIRF</h4>
            <h4 style={{margin:"0.5vw 0 0.5vw 0"}}>Cities</h4>
            <h4 style={{margin:"0.5vw 0 0.5vw 0"}}>Courses</h4>
            <h4 style={{margin:"0.5vw 0 0.5vw 0"}}>Degree</h4>
            <h4 style={{margin:"0.5vw 0 0.5vw 0"}}>Exams</h4>
            <h4 style={{margin:"0.5vw 0 0.5vw 0"}}>Scholarships</h4>
        </div>
      </div>
    );
}