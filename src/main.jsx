import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

console.log('[main.jsx] start')

const el = document.getElementById('root')
if (!el) {
  document.body.insertAdjacentHTML('beforeend', '<pre style="color:#ff8a8a;padding:12px">#root not found</pre>')
} else {
  createRoot(el).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
}
