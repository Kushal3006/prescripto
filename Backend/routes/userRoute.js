import express from 'express'
import { getprofile, registerUser,userLogin,updateProfile, bookAppointment , listAppointment, cancelAppointment,paymentRazorpay,verifyRazorpay } from '../controllers/userController.js'
import authUser from '../middleware/authUser.js'
import upload from '../middleware/multer.js'

const userRouter= express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',userLogin)

userRouter.get('/get-profile',authUser,getprofile)
userRouter.post('/update-profile',upload.single('image'),authUser,updateProfile)
userRouter.post('/book-appointment',authUser,bookAppointment)
userRouter.get('/appointments',authUser,listAppointment)
userRouter.post('/cancel-appointment',authUser,cancelAppointment)
userRouter.post('/payment-razorpay',authUser,paymentRazorpay)
userRouter.post('/verifyRazorpay',authUser,verifyRazorpay)

export default userRouter