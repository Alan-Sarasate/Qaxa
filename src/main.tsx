import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import AuthInitialize from './components/authInitialize.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthInitialize>
        <App />
      </AuthInitialize>
    </BrowserRouter>
  </StrictMode>,
)
