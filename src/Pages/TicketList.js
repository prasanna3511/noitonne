import React, { createContext, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useLocation, useNavigate } from 'react-router'

export default function TicketList() {
    const location = useLocation()
    const navigate = useNavigate()
    const TicketDataContext = createContext();
    const [ticketData, setTicketData] = useState(null);
    // console.log(location.state)
    const handleTicketDetails = (data)=>{
        setTicketData(data);
        navigate('/ticketdetails' , {state: data})
    }
  return (
    <TicketDataContext.Provider value={ticketData}>
    <div className='w-full h-screen' >
        <Navbar />
        <div className='w-full h-24 flex  flex-col ' >
        <p className='font-bold text-4xl ml-10' style={{color:'#283618'}} >{location.state.type} Tickets </p>
        </div>
        <div className='w-full h-2/3  flex  flex-col overflow-y-auto' >


{
    [1,2,3,4,5,6,7,8].map((items ,index)=>(
        <div key={index} className='w-2/3 mx-auto my-auto mb-2' onClick={()=>handleTicketDetails(items)} >
        <div className='w-3/2 h-44 border-2 border-grey-500 flex flex-row rounded-lg' style={{backgroundColor:'#F8F8F8'}} >
        <div className='w-32 h-full border-r-2 border-dotted border-grey-500 flex flex-col justify-center items-center' >
         <div className='w-full h-8 flex rounded-md justify-center items-center' style={{backgroundColor:'grey'}} >

            <p className='text-xl' style={{color:'#FFFFFF'}} >Closed</p>
         </div>
         
            <p className='text-sm' >#123</p>


        </div>
        <div className='w-4/5 h-44  flex flex-col' >
            <div className='w-full h-1/2  flex items-center' >

            <p className='text-xl ml-12' style={{color:'#082A49'}} >This is the first tickets we created</p>
            </div>
            <div className='w-full h-1/2  ' >

            <p className='text-md ml-12' style={{color:'#000000'}} >This is the first tickets we created and we going to create more like tickets to solve our day to day problems so that it will help to work fast reduce starce</p>
            </div>

</div>
<div className='w-48 h-full border-l-2 border-dotted border-grey-500 flex flex-col justify-center items-center' >
         <div className='w-full h-1/2 flex rounded-md justify-center items-center flex-col border-b-2 border-dotted border-grey-700 '  >
         <p className='text-md' style={{color:'#A9A9A9'}} >Assigned To :</p>
         <p className='text-sm'style={{color:'#082A49'}} >Prasanna Joshi</p>
         </div>
         
         <div className='w-full h-1/2 flex rounded-md justify-center items-center flex-col'  >
         <p className='text-md' style={{color:'#A9A9A9'}} >Assigned By :</p>
         <p className='text-sm' style={{color:'#082A49'}} >Omkar Shirote</p>
         </div>

        </div>
    </div>
    </div>

    ))
}
           
           



        </div>
      
    </div>
    </TicketDataContext.Provider>
  )
}
