import React from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListStudentComponent from './components/ListStudentComponent';
import CreateStudentComponent from './components/CreateStudentComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';
import ViewStudentComponent from './components/ViewStudentComponent';


function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path="/" exact element={<ListStudentComponent />} />
              <Route path="/students" element={<ListStudentComponent />} />
              <Route path="/add-student" element={<CreateStudentComponent />} />
              <Route path="/update-student/:id" element={<UpdateStudentComponent />} />
              <Route path="/view-student/:id" element={<ViewStudentComponent />} />
            </Routes>
          </div>
          <FooterComponent />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
