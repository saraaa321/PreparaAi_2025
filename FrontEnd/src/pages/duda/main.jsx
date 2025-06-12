import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Ranking from './Ranking.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ranking />
  </StrictMode>,
)
