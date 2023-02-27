import { useState } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import {createRoutesFromElements} from 'react-router-dom'
import {Route} from 'react-router-dom';
import {RouterProvider} from 'react-router-dom';
import ReactDOM  from "react-dom/client";

import Header from './components/Header/Header'
import ShowList from './components/ShowList/ShowList'
import Footer from './components/Footer/Footer'
import './App.css'
import About from './components/About/About'
import { Contact } from './components/Contact/Contact';
import Error from './components/Error/Error';
import Followers from './components/Followers/Followers';

function App() {
  return (
    <div className="App">
      <Header />
        <Outlet />
      <Footer />
    </div>
  )
}

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <ShowList />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/users/:login/followers',
        element: <Followers /> 
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root')
)

root.render(
  <RouterProvider router={appRouter} />
)

export default App