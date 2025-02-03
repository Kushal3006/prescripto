import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './Context/AdminContext';
import NavBar from './components/NavBar';
import Sidebar from './components/SideBar';
import { Route, Routes } from 'react-router-dom';
import AllAppoinment from './pages/Admin/AllAppoinment';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorsList from './pages/Admin/DoctorsList';
import Dashboard from './pages/Admin/Dashboard';
import { DoctorContext } from './Context/DoctorContext';
import DoctorDashboard from './pages/Doctor/doctorDashboard';
import DoctorProfile from './pages/Doctor/doctorprofile';
import DoctorAppointment from './pages/Doctor/doctorAppointment';


const App = () => {

  const { aToken } = useContext(AdminContext)

  const {dToken} = useContext(DoctorContext)
  return aToken || dToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer/>
      <NavBar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          {/* admin route */}
          <Route path='/' element={<></>}/>
          <Route path='/admin-dashboard' element={<Dashboard/>}/>
          <Route path='/all-appointments' element={<AllAppoinment/>}/>
          <Route path='/add-doctor' element={<AddDoctor/>}/>
          <Route path='/doctor-list' element={<DoctorsList/>}/>

          {/* doctor route */}
          <Route path='/doctor-dashboard' element={<DoctorDashboard/>}/>
          <Route path='/doctor-profile' element={<DoctorProfile/>}/>
          <Route path='/doctor-appointments' element={<DoctorAppointment/>}/>


        </Routes>
      </div>
      
    </div>
  ) : (
    <>
    <Login/>
    <ToastContainer/>
    </>

  )
}

export default App
