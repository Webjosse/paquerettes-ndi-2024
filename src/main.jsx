import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


setInterval(() => {
  if (window.clickCount){
    localStorage.setItem("count", window.clickCount?.toString() || "1000");
  } 
}, 5000);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
