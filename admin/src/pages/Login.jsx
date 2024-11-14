import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../Context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { DoctorContext } from '../Context/DoctorContext'

const Login = () => {

    const [State,setState] = useState("Admin")
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const {setAToken,backendUrl} = useContext(AdminContext)

    const {setDToken} = useContext(DoctorContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            
            if(State === "Admin"){

                const {data} = await axios.post(backendUrl + '/api/admin/login',{email,password})
            
                if(data.success){   
                    localStorage.setItem('aToken',data.token)     
                    setAToken(data.token)
                }else{
                    toast.error(data.message)
                }


            }else{

               const { data } = await axios.post(backendUrl+'/api/doctor/login',{email,password})
               if(data.success){
                localStorage.setItem('dToken',data.token)
                setDToken(data.token)
                console.log(data.token)
               }else{
                toast.error(data.message)
               }
            }
            
        }

         catch (error) {
            toast.error(error.message)
            
        }

    }


  return (
    <form onSubmit={onSubmitHandler}  className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-gray-430 text-sm shadow-lg'>
            <p className='text-2xl font-semibold m-auto'>
                <span className='text-primary'>{State}</span> Login
            </p>
            <div className='w-full'>
                <p>Email</p>
                <input onChange={(e) =>setEmail(e.target.value)} value={email} className='border border-gray-440 rounded w-full p-2 mt-1' type='email' required/>
            </div>
            <div className='w-full'>
                <p>Password</p>
                <input onChange={(e)=> setPassword(e.target.value)} value={password}  className='border border-gray-440 rounded w-full p-2 mt-1'  type='password' required/>
            </div>
            <button   className='border border-primary rounded-lg px-5 py-2  hover:bg-primary hover:text-white w-full'>Login</button>

            {
                State === "Admin"
                ? <p>Doctor Login? <span className='text-primary underline cursor-pointer' onClick={()=>setState('Doctor')}>Click here</span></p>
                : <p>Admin Login? <span className='text-primary underline cursor-pointer' onClick={()=>setState('Admin')}>Click here</span></p>
            }

        </div>

    </form>
  )
}

export default Login