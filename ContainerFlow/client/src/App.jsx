import React, { useState } from 'react';
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import ApplicationViews from "./components/ApplicationViews";
import { useEffect } from 'react';
import Authorize from './components/Authorize';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);


  useEffect(() => {
    if (!localStorage.getItem("userProfile")) {
      setIsLoggedIn(false)
    }
  }, [isLoggedIn])

  return (
    // <>
    //   <div className='bg-gradient-to-tr from-cyan-300 to-slate-100/20 py-8 border-4 rounded-full border-cyan-500  shadow-2xl'>
    //     <h1 className='my-6 text-2xl font-bold col-span-3 mix-blend-color-burn text-sky-800'>Hello, New Tailwind CSS Framework!</h1>
    //   </div>
    // </>
    <Router>
            {isLoggedIn ? (
              <>
                <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                <ApplicationViews />
              </>
             ) : (
                <>
                <Authorize setIsLoggedIn={setIsLoggedIn} />
                </>
             )   
           }
    </Router> 
  );
}

export default App;
