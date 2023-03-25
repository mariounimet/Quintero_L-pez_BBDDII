import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Register } from './pages/register/register';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
      <Route element={<Layout />}>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Route>

    </Routes>


  </BrowserRouter>

);
