import {React , useState} from 'react';
import './homeHeader.css';
import translateimg from '../../translateimg.png'
import logoimg from '../../logo.png';
import headerimg from '../../amity sih 1.png';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';

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
        <Router>
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
                <img className='translateimg' src={translateimg} />
                <button>Login/Register</button>
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
        <div style={{height:"12vw"}}></div>
        </Router>
    );
}