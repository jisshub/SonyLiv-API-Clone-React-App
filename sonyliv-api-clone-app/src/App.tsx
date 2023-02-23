import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import ShowList from './components/ShowList/ShowList'
import { Typography } from '@mui/material'

function App() {

  return (
    <div className="App">
      <Header />
      <ShowList />
    </div>
  )
}

export default App
