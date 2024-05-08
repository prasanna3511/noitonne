import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export default function RightComponent() {
  const navigation = useNavigate()
    const [data , setdata] = useState({});
    const handleChange = (key , value)=>{
        setdata({
           ...data,
            [key] : value
        })
    }
    const handleSubmit = async()=>{
      if(data.username === 'undefined') {
        alert('Please Enter Username')
        return;
       }
       if(data.password === 'undefined'){
        alert('Please Enter Password')
        return;
       }
       navigation('/dashboard')
    }
  return (
    <div className='w-1/2 h-screen flex justify-center items-center flex-col' >
      <input 
      placeholder='Enter Username'
      value={data.username}
      className='border-2 border-green-400 p-2 w-54 rounded-md mt-5'
      style={{borderColor:'#283618'}}
      onChange={(e)=>handleChange('username' ,e.target.value )}
      />
        <input 
      placeholder='Enter Password'
      value={data.password}
      className='border-2 border-green-400 p-2 w-54 rounded-md mt-5'
      style={{borderColor:'#283618'}}
      onChange={(e)=>handleChange('password' ,e.target.value )}
      />

      <button className=' p-2 w-54 rounded-md mt-5 font-bold'
      style={{backgroundColor:'#606C38' , width:264, color:'white'}}
      onClick={()=>handleSubmit()}
      >
Login
      </button>
      
    </div>
  )
}
