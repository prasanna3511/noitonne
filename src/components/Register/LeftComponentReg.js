import React from 'react'
import { useNavigate } from 'react-router'

export default function LeftComponent() {
    const navigation = useNavigate()
  return (
    <div className='w-1/2 h-screen  flex justify-center items-center flex-col' >
        <p className='font-bold text-4xl' style={{color:'#283618'}} >Sign Up In the Ticketing systems</p>
        <p className='font-semibold text-xl' style={{color : "#283618"}} >If you have account <span className='font-semibold text-xl'style={{color:'#BC6C25'}} onClick={()=>navigation('/')} >Login!</span></p>

      
    </div>
  )
}
