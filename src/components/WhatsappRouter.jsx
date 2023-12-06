import React from 'react';
import SideBar from './SideBar';
import MessageSection from './MessageSection';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Blank from './Blank';

const WhatsappRouter = () => {
  return (
    <div className="flex">
        <Router>
            <SideBar/>
            <Routes>
                <Route path='/' element={<Blank/>}></Route>
                <Route path='/chat/:num/:id' element={<MessageSection/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default WhatsappRouter