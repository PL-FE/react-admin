import React from 'react'
import './App.css'
import Home from '@/components/layout/index.jsx'

import { BrowserRouter } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </div>
    )
  }
}
