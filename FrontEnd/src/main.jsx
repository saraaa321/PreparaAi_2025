// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './pages/PaginaLogin.css'
// import PaginaLogin from './pages/PaginaLogin'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <PaginaLogin />
//   </StrictMode>,
// )


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RouterApp from './RouterApp'; // ou './routes/RouterApp' se estiver em subpasta
import './pages/css/PaginaLogin.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  </StrictMode>
);

