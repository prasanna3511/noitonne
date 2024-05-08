import React from 'react'
import { useNavigate } from 'react-router'

export default function LeftComponent() {
    const navigation  = useNavigate()
    const handleRegister = ()=>{
        navigation('/register')
    }
  return (
    <div className='w-1/2 h-screen  flex justify-center items-center flex-col' >
        <p className='font-bold text-4xl' style={{color:'#283618'}} >Sign In For Ticketing systems</p>
        <p className='font-semibold text-xl' style={{color : "#283618"}} >If you are not member <span className='font-semibold text-xl'style={{color:'#BC6C25' , cursor:'pointer'}} onClick={()=>handleRegister()} >Register!</span></p>

      
    </div>
  )
}
