import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import ShowList from './components/ShowList/ShowList'
import { Typography } from '@mui/material'
import Footer from './components/Footer/Footer'
import SearchUsers from './components/SearchUsers/SearchUsers'

function App() {

  return (
    <div className="App">
      <Header />
      <ShowList />
      <Footer />
    </div>
  )
}

export default App
