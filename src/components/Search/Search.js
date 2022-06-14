import {React , useState} from 'react';
import classes from './Search.module.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import clgdata from '../../colleges.json';

export default function Search() {

  const [searchTerm , SetSearchTerm] = useState('');

  const [searchFor , setSearchFor] = useState('');

    return (
        <>
            <Header />
            <div style={{display:"flex",flexDirection:"column"}}>
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
                        return <div style={{backgroundColor:"white"}}>
                        <p style={{margin:"0.5vw 0 0.5vw 0", fontSize:"1vw",textIndent:"1vw"}}>{val.Name}</p>
                    </div>
                })}
                </div>
                <button className={classes.searchbutton} onClick={event => setSearchFor(document.getElementById("searchbox").value)}>Search</button>
            </div>
            <div className={classes.resultContainer}>
                <div className={classes.filters}>
                    <div className={classes.subFilters}>
                        <h4>NIRF ranking</h4>
                    </div>
                    <div className={classes.subFilters}>
                        <h4>Courses</h4>
                    </div>
                    <div className={classes.subFilters}>
                        <h4>Degrees</h4>
                    </div>
                    <div className={classes.subFilters}>
                        <h4>Average Packages</h4>
                    </div>
                    <div className={classes.subFilters}>
                        <h4>Facilities</h4>
                    </div>
                    <div className={classes.subFilters}>
                        <h4>Clubs/Cells</h4>
                    </div>
                    <div style={{height:"1vw"}}></div>
                </div>
                <div className={classes.searchResults}>
                {
                clgdata.filter((val) => {
                    if(val.Name.toLowerCase().includes(searchFor.toLowerCase())){
                        return val;
                    }
                    else if(searchFor === ""){
                        return val;
                    }
                    }).map((val , key)=>{
                        return <div className={classes.searchDDlist}>
                            <image src={val.img} style={{width: "10vw" , height:"10vw" ,border:"1px solid green"}}/>
                            <div className={classes.clgInfo} style={{border:"1px solid green", width:"80%"}}>
                                <p style={{margin:"0.5vw 0 0.5vw 0", fontSize:"1.5vw",textIndent:"1vw"}}>{val.Name}</p>
                            </div>
                        </div>
                    })
                }
                </div>
            </div>
            </div>
            <div style={{height:"20vw"}}></div>
            <Footer />
        </>
    )

}