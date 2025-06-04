import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Components/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Navbar />
      <App />
    </StrictMode>
  </BrowserRouter>,
)
