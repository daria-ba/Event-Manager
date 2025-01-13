import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.scss";
import GeneralPage from './pages/HomePage/GeneralPage';
// import LoginPage from './components/Auth/LoginModal';
import RegisterPage from './components/Auth/RegisterPage';

const App = () => (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<GeneralPage />}>
        {/* <Route path="/" element={<div><GeneralPage /></div>} /> */}
      </Route>
      {/* <Route path="/login" element={<div><LoginPage /></div>} /> */}
      <Route path="/signup" element={<div><RegisterPage /></div>} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  </BrowserRouter>
  );

export default App;
