import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Telainicial from "./assets/pages/home/telainicial/telainicial.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Telainicial/>
  </StrictMode>,
)

