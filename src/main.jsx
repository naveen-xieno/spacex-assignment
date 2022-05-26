import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/year/:y" element={<App />} />
        <Route path="/launch/:t" element={<App />} />
        <Route path="/landing/:l" element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter> 
)
