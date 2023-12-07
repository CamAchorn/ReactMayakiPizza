import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from './screens/Home'
import {Menu} from './screens/Menu'
import {AllergenGuide} from './screens/AllergenGuide'
import {Login} from './screens/Login'
import {SignUp} from './screens/SignUp'
import {CreateYourOwn} from './screens/CreateYourOwn'
import {AboutUs} from './screens/AboutUs'
import {Reservations} from './screens/Reservations'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Home />} />
        <Route path="/home" element = {<Home />} />
        <Route path="/menu" element = {<Menu />} />
        <Route path="/allergenguide" element = {<AllergenGuide />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/signup" element = {<SignUp />} />
        <Route path="/createyourown" element = {<CreateYourOwn />} />
        <Route path="/aboutus" element = {<AboutUs />} />
        <Route path="/reservations" element = {<Reservations />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

/*
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './screens/Home/Home'
import Menu from './screens/Menu/Menu'


export default function App() {
  return (
      <div> 
          <Home />
      </div>
  )
}
*/