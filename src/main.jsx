import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './css/index.css'
import './css/body.css'
import './css/Footer.css'
import Nav from './components/Nav.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Main />
    <Footer />
  </React.StrictMode>,
)
