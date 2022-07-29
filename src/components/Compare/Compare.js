import {React,useState} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import classes from './Compare.module.css';
import clgdata from '../../colleges.json';

export default function Compare() {

    const [searchTerm1 , SetSearchTerm1] = useState('');
    const [searchTerm2 , SetSearchTerm2] = useState('');

    return (
        <div>
            <Header />
                <div className ={classes.outerBoundary}>
                    <div className={classes.filterContainer}>
                        <button className={classes.compareBtn}>Compare</button>
                        <div className={classes.filters}>
                            <div className={classes.subFilters}>
                                <h4 className={classes.filterOptions}>NIRF ranking</h4>
                            </div>
                            <div className={classes.subFilters}>
                                <h4 className={classes.filterOptions}>Courses</h4>
                            </div>
                            <div className={classes.subFilters}>
                                <h4 className={classes.filterOptions}>Degrees</h4>
                            </div>
                            <div className={classes.subFilters}>
                                <h4 className={classes.filterOptions}>Average Packages</h4>
                            </div>
                            <div className={classes.subFilters}>
                                <h4 className={classes.filterOptions}>Facilities</h4>
                            </div>
                            <div className={classes.subFilters}>
                                <h4 className={classes.filterOptions}>Clubs/Cells</h4>
                            </div>
                            <div style={{height:"1vw"}}></div>
                        </div>
                    </div>
                    <div className={classes.comparingContainer}>
                        <div className={classes.inputs}>
                            <div className={classes.searchBox}>
                                <input className={classes.clgNameInput} onChange={event => SetSearchTerm1(event.target.value)} id="searchbox" placeholder='Search here'/>
                                <div className={classes.searchDropDown}>
                                    {clgdata.filter((val) => {
                                        if(searchTerm1 === ""){
                                        return null;
                                    }
                                    else if(searchTerm1.toLowerCase() === "all"){
                                        return val;
                                    }
                                    else if(val.Name.toLowerCase().includes(searchTerm1.toLowerCase())){
                                        return val;
                                    }
                                    }).map((val , key)=>{
                                        return <div style={{backgroundColor:"white"}}>
                                        <p style={{margin:"0.5vw 0 0.5vw 0", fontSize:"1.5vw",textIndent:"1vw",borderBottom:"1px solid green"}}>{val.Name}</p>
                                    </div>
                                    })}
                                </div>
                            </div>
                            <p style={{fontSize:"2vw",fontWeight:"bold"}}>Vs</p>
                            <div className={classes.searchBox}>
                                <input className={classes.clgNameInput} onChange={event => SetSearchTerm2(event.target.value)} id="searchbox" placeholder='Search here'/>
                                <div className={classes.searchDropDown}>
                                    {clgdata.filter((val) => {
                                        if(searchTerm2 === ""){
                                        return null;
                                    }
                                    else if(searchTerm2.toLowerCase() === "all"){
                                        return val;
                                    }
                                    else if(val.Name.toLowerCase().includes(searchTerm2.toLowerCase())){
                                        return val;
                                    }
                                    }).map((val , key)=>{
                                        return <div style={{backgroundColor:"white"}}>
                                        <p style={{margin:"0.5vw 0 0.5vw 0", fontSize:"1.5vw",textIndent:"1vw",borderBottom:"1px solid green"}}>{val.Name}</p>
                                    </div>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={classes.compareResults}>
                            <div className={classes.compPoints}>

                            </div>
                            <div className={classes.compPoints}>
                                
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}