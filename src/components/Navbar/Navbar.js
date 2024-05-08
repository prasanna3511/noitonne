import React from 'react'

export default function Navbar() {
    const handleLogout = ()=>{
        // localStorage.removeItem('token')
        localStorage.clear()
        window.location.reload()
    }
  return (
    <div className='w-full h-20 border-2 border-grey-400 flex justify-end items-center shadow-md' >
      <img src={require('../../images/logout.png')} className='mr-10'  style={{width:50 , height:50}} onClick={()=>handleLogout()} />
    </div>
  )
}
