import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usercrud from './Usercrud'
import Home from './Home'
import Contact from './Contact'
import Contact1 from './Contact1'
import Contact2 from './Contact2'
import Menu from './Menu'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {
  return (
    <>
      <div>
        <h4>FIrst vite project</h4>
        <Menu />
        {/* <BrowserRouter> */}
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/contact' element={<Contact />}>
            <Route path='c1' element={<Contact1/>}/>
            <Route path='c2' element={<Contact2/>}/>
          </Route>
          <Route path='/crud' element={<Usercrud />}/>
        </Routes>
        {/* </BrowserRouter> */}
        {/* <Usercrud /> */}
        {/* <Home /> */}
        {/* <Contact /> */}
      </div>
    </>
  )
}

export default App
