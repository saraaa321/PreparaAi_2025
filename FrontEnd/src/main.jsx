import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './pages/PaginaLogin.css'
import PaginaLogin from './pages/PaginaLogin'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PaginaLogin />
  </StrictMode>,
)
