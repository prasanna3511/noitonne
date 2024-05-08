import React from 'react'
import LeftComponentReg from '../components/Register/LeftComponentReg'
import RightComponentReg from '../components/Register/RightComponentReg'

export default function Register() {
  return (
    <div className='w-full  h-screen border-2 border-red-200 flex flex-row' >
    <LeftComponentReg />
    <RightComponentReg />
  </div>
  )
}
