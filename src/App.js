import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Home/Home';
import Calendar from './components/calendar/Calendar';
import Login from './components/login/Login';
import Search from './components/Search/Search';
import Loading from './components/loading/Loading'
import Compare from './components/Compare/Compare';
import ClgInfo from './components/ClgInfo/ClgInfo';

function App() {

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
        loading ? <Loading /> : <Search />
      }
    </div>
  );
}

export default App;