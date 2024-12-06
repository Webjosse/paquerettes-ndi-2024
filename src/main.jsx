import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

window.addEach = 0;
window.addFun = (_) => {}

setInterval(() => {
  window.addFun(window.addEach);
}, 1000)

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
