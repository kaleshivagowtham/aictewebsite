import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Calendar from './pages/calendar';
import Login from './pages/login';
import Search from './pages/search';
import Loading from './components/loading'
import Compare from './pages/compare';
import ClgInfo from './pages/clginfo';

export default function App() {

  const [loading , setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },2000);
  },[])

  return (
     <div className="App">
      {
        loading ? <Loading /> : <Login />
      }
    </div>
  );
}