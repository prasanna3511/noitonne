import React from 'react'
import LeftComponent from '../components/Login/LeftComponent'
import RightComponent from '../components/Login/RightComponent'

export default function Login() {
  return (
    <div className='w-full  h-screen border-2 border-red-200 flex flex-row' >
      <LeftComponent />
      <RightComponent />
    </div>
  )
}
