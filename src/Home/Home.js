import {React, useState} from 'react';
import classes from './Home.module.css';
import HomeHeader from '../components/header/homeHeader';
import Footer from '../components/footer/Footer';
import titleimg from '../AICTE_building1 1.png';
import clgimg from '../clgimg.png';
import cityimg from '../cityimg.jpg';
import clgdata from '../colleges.json';

function Home() {

  const [searchTerm , SetSearchTerm] = useState('');
  const search = () => {
    const searchtext = document.getElementById("searchbox").value
  }

  return (
    <div className="Home">
      <HomeHeader />
      <img className={classes.titleimg} src={titleimg}/>
      <div className={classes.search}>
        <input type={Text} className={classes.searchbar} onChange={event => SetSearchTerm(event.target.value)} id="searchbox" placeholder='Search here'/>
        <div className={classes.searchDropDown}>
        {clgdata.filter((val) => {
          if(searchTerm === ""){
            return null;
          }
          else if(searchTerm.toLowerCase() === "all"){
            return val;
          }
          else if(val.Name.toLowerCase().includes(searchTerm.toLowerCase())){
            return val;
          }
        }).map((val , key)=>{
            return <div className={classes.searchDDlist} style={{backgroundColor:"white"}}>
              <p style={{margin:"0.5vw 0 0.5vw 0", fontSize:"1vw",textIndent:"1vw"}}>{val.Name}</p>
              <hr />
            </div>
        })}
        </div>
        <button className={classes.searchbutton}>Search</button>
      </div>
      <div style={{ width:"80%" ,height:"auto",border:"1px solid black" , borderRadius:"25px" ,left:"10%", top:"-20vw",backgroundColor:"white" , position:"relative" , padding:"0 0 10vw 0"}}>
       <div>
        <h4 style={{fontSize:"2vw" , position:"relative" , left:"-30%" , top:"4.5vw"}}>Top Colleges</h4>
        <div className={classes.topclgscontent}>
            <img className={classes.topclgs} src={clgimg}/>
            <img className={classes.topclgs} src={clgimg}/>
            <img className={classes.topclgs} src={clgimg}/>
            <img className={classes.topclgs} src={clgimg}/>
            <img className={classes.topclgs} src={clgimg}/>
            <button className={classes.topclgsmore} style={{userSelect:"none",WebkitUserSelect:"none",cursor:"pointer"}}>+More...</button>
        </div>
       </div>
        <div >
          <h4 style={{fontSize:"2vw" , position:"relative" , left:"-34%" , top:"10vw"}}>Cities</h4>
           <div className={classes.citiescontainer}>
          <div className={classes.cities}>
                <img className={classes.topcities} src={cityimg}/>
                <p style={{ position:"absolute",fontSize:"1vw" , width:"auto" , height:"auto",fontSize:"1.5vw",top:"50%"}}>city name</p>
            </div>
            <div className={classes.cities}>
                <img className={classes.topcities} src={cityimg}/>
                <p style={{ position:"absolute",fontSize:"1vw" , width:"auto" , height:"auto",fontSize:"1.5vw",top:"50%"}}>city name</p>
            </div>
            <div className={classes.cities}>
                <img className={classes.topcities} src={cityimg}/>
                <p style={{ position:"absolute",fontSize:"1vw" , width:"auto" , height:"auto",fontSize:"1.5vw",top:"50%"}}>city name</p>
            </div>
            <div className={classes.cities}>
                <img className={classes.topcities} src={cityimg}/>
                <p style={{ position:"absolute",fontSize:"1vw" , width:"auto" , height:"auto",fontSize:"1.5vw",top:"50%"}}>city name</p>
            </div>
            <div className={classes.cities}>
                <img className={classes.topcities} src={cityimg}/>
                <p style={{ position:"absolute",fontSize:"1vw" , width:"auto" , height:"auto",fontSize:"1.5vw",top:"50%"}}>city name</p>
            </div>
            <div className={classes.cities}>
                <img className={classes.topcities} src={cityimg}/>
                <p style={{ position:"absolute",fontSize:"1vw" , width:"auto" , height:"auto",fontSize:"1.5vw",top:"50%",paddingBottom:"1vw"}}>city name</p>
            </div>
            <div className={classes.topcities}>
                <button className={classes.morebtn}>+More...</button>
            </div>
          </div>
        </div>
        <div >
          <h4 style={{fontSize:"2vw" , position:"relative" , left:"-34%" , top:"10vw"}}>Exams</h4>
           <div className={classes.citiescontainer}>
          <div className={classes.cities}>
                <img className={classes.topcities} src={cityimg}/>
                <p style={{ position:"absolute",fontSize:"1vw" , width:"auto" , height:"auto",fontSize:"1.5vw",top:"50%"}}>city name</p>
            </div>
            <div className={classes.cities}>
                <img className={classes.topcities} src={cityimg}/>
                <p style={{ position:"absolute",fontSize:"1vw" , width:"auto" , height:"auto",fontSize:"1.5vw",top:"50%"}}>city name</p>
            </div>
            <div className={classes.cities}>
                <img className={classes.topcities} src={cityimg}/>
                <p style={{ position:"absolute",fontSize:"1vw" , width:"auto" , height:"auto",fontSize:"1.5vw",top:"50%"}}>city name</p>
            </div>
            <div className={classes.cities}>
                <img className={classes.topcities} src={cityimg}/>
                <p style={{ position:"absolute",fontSize:"1vw" , width:"auto" , height:"auto",fontSize:"1.5vw",top:"50%"}}>city name</p>
            </div>
            <div className={classes.cities}>
                <img className={classes.topcities} src={cityimg}/>
                <p style={{ position:"absolute",fontSize:"1vw" , width:"auto" , height:"auto",fontSize:"1.5vw",top:"50%"}}>city name</p>
            </div>
            <div className={classes.cities}>
                <img className={classes.topcities} src={cityimg}/>
                <p style={{ position:"absolute",fontSize:"1vw" , width:"auto" , height:"auto",fontSize:"1.5vw",top:"50%",paddingBottom:"1vw"}}>city name</p>
            </div>
            <div className={classes.topcities}>
                <button className={classes.morebtn}>+More...</button>
            </div>
          </div>
        </div> 
        <div >
          <h4 style={{fontSize:"2vw" , position:"relative" , left:"-30%" , top:"10vw"}}>Scholarships</h4>
          <div className={classes.citiescontainer}>
          <div className={classes.cities}>
                <img className={classes.topcities} src={cityimg}/>
                <p style={{ position:"absolute",fontSize:"1vw" , width:"auto" , height:"auto",fontSize:"1.5vw",top:"50%"}}>city name</p>
            </div>
            <div className={classes.cities}>
                <img className={classes.topcities} src={cityimg}/>
                <p style={{ position:"absolute",fontSize:"1vw" , width:"auto" , height:"auto",fontSize:"1.5vw",top:"50%"}}>city name</p>
            </div>
            <div className={classes.cities}>
                <img className={classes.topcities} src={cityimg}/>
                <p style={{ position:"absolute",fontSize:"1vw" , width:"auto" , height:"auto",fontSize:"1.5vw",top:"50%"}}>city name</p>
            </div>
            <div className={classes.cities}>
                <img className={classes.topcities} src={cityimg}/>
                <p style={{ position:"absolute",fontSize:"1vw" , width:"auto" , height:"auto",fontSize:"1.5vw",top:"50%"}}>city name</p>
            </div>
            <div className={classes.cities}>
                <img className={classes.topcities} src={cityimg}/>
                <p style={{ position:"absolute",fontSize:"1vw" , width:"auto" , height:"auto",fontSize:"1.5vw",top:"50%"}}>city name</p>
            </div>
            <div className={classes.cities}>
                <img className={classes.topcities} src={cityimg}/>
                <p style={{ position:"absolute",fontSize:"1vw" , width:"auto" , height:"auto",fontSize:"1.5vw",top:"50%",paddingBottom:"1vw"}}>city name</p>
            </div>
            <div className={classes.topcities}>
                <button className={classes.morebtn} >+More...</button>
            </div>
          </div>
        </div>  
        <div >
          <h4 style={{fontSize:"2vw" , position:"relative" , left:"-35%" , top:"13vw"}}>News</h4>
          <div className={classes.newsbox}>
            <div className={classes.news} style={{fontSize:"1.5vw"}}>
            <ol style={{  listStyle:"circle",textAlign:"start"}}>
              <li style={{padding:"0.75vw 0.5vw 0.75vw 0.5vw"}}>Time to roll Time to roll Time to roll Time to roll Time to roll Time to roll 12345111111111111111111111111111111</li>
              <li style={{padding:"0.75vw 0.5vw 0.75vw 0.5vw"}}>Time to roll</li>
              <li style={{padding:"0.75vw 0.5vw 0.75vw 0.5vw"}}>Time to roll</li>
              <li style={{padding:"0.75vw 0.5vw 0.75vw 0.5vw"}}>Time to roll</li>
              <li style={{padding:"0.75vw 0.5vw 0.75vw 0.5vw"}}>Time to roll</li>
              <li style={{padding:"0.75vw 0.5vw 0.75vw 0.5vw"}}>Time to roll</li>
              <li style={{padding:"0.75vw 0.5vw 0.75vw 0.5vw"}}>Time to roll</li>
              <li style={{padding:"0.75vw 0.5vw 0.75vw 0.5vw"}}>Time to roll</li>
              <li style={{padding:"0.75vw 0.5vw 0.75vw 0.5vw"}}>Time to roll</li>
              <li style={{padding:"0.75vw 0.5vw 0.75vw 0.5vw"}}>Time to roll</li>
            </ol>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;