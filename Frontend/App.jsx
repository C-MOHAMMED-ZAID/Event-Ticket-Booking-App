import React from 'react'
import "./App.css"
import CreateBooking from './pages/CreateBooking'
import EditBooking from './pages/EditBooking'
import Home from './pages/Home'
import BookingList from './pages/BookingList'
import MenuBar from './components/MenuBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <div className='details'>
        <h3>DEVELOPER NAME: C MOHAMMED ZAID</h3>
        <h3>REG NO: 23IT126</h3>
      </div>
    <MenuBar></MenuBar>
    
        <Routes>
          <Route path='/'element={<Home/>}></Route>
          <Route path='/booking-list' element={<BookingList/>}></Route>
          <Route path='/create-booking' element={<CreateBooking/>}></Route>
          <Route path='/EditBooking' element={<EditBooking/>}></Route>
          <Route path='/edit-booking/:id' element={<EditBooking/>}></Route>
        </Routes>

      
    </div>
  )
}

export default App
