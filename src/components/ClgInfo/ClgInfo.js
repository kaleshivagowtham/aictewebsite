import React from 'react';
import Header from '../header/homeHeader.js';
import Footer from '../footer/Footer';
import classes from './ClgInfo.module.css';
import titleImg from '../../amity sih 1.png';
import clgLogo from '../../clgLogo.png'

export default function ClgInfo() {
    return(
        <div>
            <Header />
                <img src={titleImg} className={classes.titleImg}/>
                <div className={classes.Info}>
                    <div className={classes.titleBlock}>
                        <img src={clgLogo} className={classes.clgLogo}/>
                        <h2>Dr. D.Y. Patil Institute of Engineering, Management And Research -  [DYPIEMR] Akurdi, Pune</h2>
                    </div>
                    <div className={classes.clgDetailOptions}>
                        <button className={classes.options}>Info</button>
                        <button className={classes.options}>Course & Fees</button>
                        <button className={classes.options}>Reviews & QnA</button>
                        <button className={classes.options}>Cut-Off</button>
                        <button className={classes.options}>Placements</button>
                        <button className={classes.options}>Admission</button>
                        <button className={classes.options}>Scholarships</button>
                        <button className={classes.options}>Faculty</button>
                        <button className={classes.options}>Campus Life</button>
                        <button className={classes.options}>Nearby facilities</button>
                        <button className={classes.options}>Hostel</button>
                        <button className={classes.options}>Student Activities</button>
                        <button className={classes.options}>Gallery</button>
                        <button className={classes.options}>Academic calendar</button>
                        <button className={classes.options}>Location</button>
                        <button className={classes.options}>Alumni</button>
                    </div>
                    <hr style={{width:"90%"}}/>
                </div>
            <Footer />
        </div>
    )
}