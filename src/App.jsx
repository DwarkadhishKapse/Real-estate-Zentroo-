import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './component/home';
import Buyhome from './component/Buyhome'
import Sellhome from './component/Sellhome';
import Renthome from './component/Renthome';
import Signup from './component/Signup';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buy" element={<Buyhome />} />
      <Route path="/sell" element={<Sellhome />} />
      <Route path="/rent" element={<Renthome />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default App