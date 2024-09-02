import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Practice from './Practice.jsx'
import PasswordGenerator from './PasswordGenerator.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Practice/> */}
    {/* <App/> */}
    <PasswordGenerator/>
  </React.StrictMode>,
)
