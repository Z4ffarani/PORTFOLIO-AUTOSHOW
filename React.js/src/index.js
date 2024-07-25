import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./components/Header/index.js"
import Home from './routes/Home.js'
import Favorites from './routes/Favorites.js'
import Race from './routes/Race.js'
import reportWebVitals from './reportWebVitals'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Routes, Route } from "react-router-dom"
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #000117;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
 
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 0px;
  }

  ::-webkit-scrollbar-thumb:hover {
    opacity: 1;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/race" element={<Race/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
