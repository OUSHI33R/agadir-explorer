import React from 'react';

import Home from './routes/Home';
import Contact from './routes/Contact';
import Service from './routes/Service';
import About from './routes/About';
import SignUp from './routes/SignUp'
import Login from './routes/Login'
import TravelPlan from './routes/TravelPlan'
import PageNotFound from './routes/PageNotFound';


import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AiOutlineAccountBook } from 'react-icons/ai';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/travelplan" element={<TravelPlan/>}/>
        <Route path="*" element={<PageNotFound />} />


      </Routes>
    </div>
  );
}

export default App;
