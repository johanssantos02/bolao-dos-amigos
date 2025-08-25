import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './app/shared/global/style'
import { ToastContainer } from 'react-toastify'
// import App from './app/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ToastContainer/>
      <GlobalStyle/>
        <App />
    </BrowserRouter>
  </StrictMode>,
)
