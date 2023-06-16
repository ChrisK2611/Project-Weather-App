import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Duesseldorf from "./pages/Duesseldorf.jsx";
import Berlin from "./pages/Berlin.jsx";
import Ingolstadt from "./pages/Ingolstadt.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/duesseldorf' element={<Duesseldorf />}/>
      <Route path='/berlin' element={<Berlin />}/>
      <Route path='/muenchen' element={<Ingolstadt />}/>
      <Route path='/ingolstadt' element={<Ingolstadt />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
