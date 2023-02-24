import { useState } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import {createRoutesFromElements} from 'react-router-dom'
import {Route} from 'react-router-dom';
import {RouterProvider} from 'react-router-dom';

import reactLogo from './assets/react.svg'
import Header from './components/Header/Header'
import ShowList from './components/ShowList/ShowList'
import Footer from './components/Footer/Footer'
import './App.css'
import About from './components/About/About'
import { RootLayout } from './layouts/RootLayout';


const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<ShowList />} />
      <Route path='about' element={<About />}/>
    </Route>
))

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <ShowList />
        <Footer />
      </div>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App;
