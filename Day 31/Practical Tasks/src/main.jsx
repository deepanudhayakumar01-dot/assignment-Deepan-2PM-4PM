import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Paragraph from './paragraph.JSX'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Paragraph/>

  </StrictMode>,
)
