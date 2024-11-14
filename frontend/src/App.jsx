import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctor from './pages/Doctor'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppoinment from './pages/MyAppoinment'
import Appoinment from './pages/Appoinment'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer/>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctor />} />
        <Route path='/doctors/:speciality' element={<Doctor />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointment' element={<MyAppoinment />} />
        <Route path='/appointment/:docId' element={<Appoinment />} />
      </Routes>
      <Footer/>
    
    </div>
  )
}

export default App