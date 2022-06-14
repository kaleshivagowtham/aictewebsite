import {React, useState} from 'react';
import classes from './Login.module.css';

function Login(){
    return(
        <div className={classes.container}>
            <div className={classes.registerContainer}>
                <h3 style={{fontSize:"2vw"}}>Register</h3>
                <div className={classes.nameContainer}>
                    <h4 style={{textAlign:"Left",textIndent:"5.5vw",fontSize:"1.5vw" }}>Full name :</h4>
                    <div className={classes.nameInput} style={{display:"flex",gap:"2vw",justifyContent:"center"}}>
                        <input style={{width:"15vw",height:"2.5vw",fontSize:"1.5vw",borderRadius:"0.5vw",textIndent:"1vw"}} placeholder="First name"/>
                        <input style={{width:"15vw",height:"2.5vw",fontSize:"1.5vw",borderRadius:"0.5vw",textIndent:"1vw"}} placeholder="Last name"/>
                    </div>
                </div>
                <div>
                    <h4 style={{textAlign:"Left",textIndent:"5.5vw",fontSize:"1.5vw" }}>Phone number :</h4>
                    <div style={{position:"relative",display:"flex", gap:"1vw",left:"5.5vw"}}>
                        <p style={{border:"1px solid black", fontSize:"1.5vw",width:"3vw",height:"2.5vw",marginTop:"0.3vw",borderRadius:"0.5vw"}}>+91</p>
                        <input style={{width:"40%",fontSize:"1.5vw",height:"2.5vw",borderRadius:"0.5vw",textIndent:"1vw"}} placeholder='10 digit number'/>
                    </div>
                </div>
                <div className={classes.emailContainer}>
                    <h4 style={{textAlign:"Left",textIndent:"5.5vw",fontSize:"1.5vw" }}>Email :</h4>
                    <div className={classes.emailInput}>
                        <input style={{width:"75%",fontSize:"1.5vw",height:"2.5vw",borderRadius:"0.5vw",textIndent:"1vw"}} placeholder='Email id'/>
                    </div>
                </div>
                <div className={classes.locationContainer}>
                <h4 style={{textAlign:"Left",textIndent:"5.5vw",fontSize:"1.5vw" }}>Location :</h4>
                    <div className={classes.locationInput} style={{position:"relative",display:"flex",gap:"0.5vw",left:"5vw"}}>
                        <input style={{width:"10vw",fontSize:"1.5vw",height:"2.5vw",borderRadius:"0.5vw",textIndent:"1vw"}} placeholder='Country'/>
                        <input style={{width:"10vw",fontSize:"1.5vw",height:"2.5vw",borderRadius:"0.5vw",textIndent:"1vw"}} placeholder='State'/>
                        <input style={{width:"10vw",fontSize:"1.5vw",height:"2.5vw",borderRadius:"0.5vw",textIndent:"1vw"}} placeholder='City'/>
                    </div>
                </div>
                <div>
                    <h4 style={{textAlign:"Left",textIndent:"5.5vw",fontSize:"1.5vw" }}>Degree & course :</h4>
                    <div className={classes.degreeInput} style={{position:"relative",display:"flex",gap:"2vw",left:"5.5vw"}}>
                    <input style={{width:"35%",fontSize:"1.5vw",height:"2.5vw",borderRadius:"0.5vw",textIndent:"1vw"}} placeholder='Degree'/>
                    <input style={{width:"35%",fontSize:"1.5vw",height:"2.5vw",borderRadius:"0.5vw",textIndent:"1vw"}} placeholder='Course'/>
                    </div>
                </div>
                <button style={{position:"relative",width:"10vw",height:"2.5vw",fontSize:"1.5vw",borderRadius:"0.5vw", margin:"6vw 7vw 4vw 15vw" }}>Register</button>
            </div>
            <hr style={{marginTop:"4vw",marginBottom:"4vw"}}/>
            <div className={classes.loginContainer}>
                <h3 style={{fontSize:"2vw"}}>Login</h3>
                <div>
                    <div className={classes.usernameContainer} style={{position:"relative",display:"flex",marginTop:"4vw",marginLeft:"3.5vw",gap:"2vw"}}>
                        <h4 style={{width:"9vw",height:"2.5vw",fontSize:"1.5vw",marginTop:"0.5vw"}}>Username :</h4>
                        <input style={{width:"24vw",fontSize:"1.5vw",height:"2.5vw",borderRadius:"0.5vw",textIndent:"1vw"}} placeholder='username'/>
                    </div>
                </div>
                <div>
                    <div className={classes.passwordContainer} style={{position:"relative",display:"flex",marginTop:"1vw",marginLeft:"3.5vw",gap:"2vw"}}>
                        <h4 style={{width:"9vw",height:"2.5vw",fontSize:"1.5vw",marginTop:"0.5vw"}}>Password :</h4>
                        <input style={{width:"24vw",fontSize:"1.5vw",height:"2.5vw",borderRadius:"0.5vw",textIndent:"1vw"}} placeholder='password'/>
                    </div>
                </div>
                <button style={{position:"relative",width:"13vw",height:"2.5vw",fontSize:"1.5vw",borderRadius:"0.5vw" ,margin:"1vw 5vw 1vw 4.5vw"}}>Login</button>
                <p style={{position:"relative",width:"13vw",height:"2.5vw",fontSize:"1.5vw",margin:"1vw 5vw 1vw 4.5vw"}}>Forgot password?</p>
                <div style={{display:"flex",width:"100%", height:"auto"}}>
                    <hr style={{height:"0.1px",width:"30%",marginTop:"4vw"}}/>
                    <p style={{width:"5vw",height:"2.5vw",fontSize:"1.5vw",marginTop:"3vw",}}>OR</p>
                    <hr style={{height:"0.1px",width:"30%",marginTop:"4vw"}}/>
                </div>
                <div className={classes.OTPLoginContainer}>
                    <h4 style={{textAlign:"Left",textIndent:"5.5vw",fontSize:"1.5vw"}}>Email ID / Phone Number :</h4>
                    <input style={{width:"75%",fontSize:"1.5vw",height:"2.5vw",borderRadius:"0.5vw",textIndent:"1vw"}} placeholder='Email id'/>
                    <button style={{position:"relative",width:"13vw",height:"2.5vw",fontSize:"1.5vw",borderRadius:"0.5vw" ,margin:"2vw 20vw 1vw 0vw"}}>Send OTP</button>
                    <div className={classes.enterOTP} style={{display:"flex"}}>
                        <h4 style={{width:"9vw",height:"2.5vw",fontSize:"1.5vw",marginLeft:"4.5vw"}}>Enter OTP :</h4>
                        <input style={{width:"20vw",fontSize:"1.5vw",height:"2.5vw",borderRadius:"0.5vw",textIndent:"1vw",margin:"1.75vw 0 2vw 1vw"}} placeholder='OTP'/>
                    </div>
                    <button style={{position:"relative",width:"13vw",height:"2.5vw",fontSize:"1.5vw",borderRadius:"0.5vw" ,margin:"1vw 21vw 1vw 0vw"}}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Login;