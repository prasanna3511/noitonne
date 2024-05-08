import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useNavigate } from 'react-router'

export default function Dashboard() {
    const name =  'user'
    const navigate = useNavigate()
    const handleTicketList = (type)=>{
      // console.log(type)
       navigate('/ticketlist' , {state:{'type':type}})
    }
  return (
    <div className='w-full h-screen' >
      <Navbar />
      <div className='w-full h-4/5 flex  flex-col' >
        <p className='font-bold text-4xl ml-10' style={{color:'#283618'}} >Hello {name} </p>
        <div className='w-full h-2/3  flex flex-row flex-wrap' >

          <div className='w-1/2 h-full  flex justify-center items-center flex-col ' style={{minWidth:500}} > 
            <div className='w-2/3 h-36 border-2 border-grey-500 shadow-md rounded-lg flex items-center' onClick={()=>handleTicketList("All")} >
              <div className='h-36 border-2 border-dotted border-grey-500 ml-20 absolute' >

              </div>
              <div className='w-2/3 h-24 ml-10 rounded-lg flex justify-center items-center flex-row'  style={{backgroundColor:'#85A1EE'}}>
                <p className='text-xl ' style={{color:'#082A49'}} >Total Tickets</p>
                <div className='w-8 h-8 rounded-2xl  ml-10 flex justify-center items-center' style={{backgroundColor:'#FFFFFF'}} >

<p className='text-md  ' style={{color:'#082A49'}} >20</p>
</div>              </div>
            </div>





            <div className='w-2/3 h-36 border-2 border-grey-500 shadow-md rounded-lg flex items-center mt-10'  onClick={()=>handleTicketList("Open")} >
              <div className='h-36 border-2 border-dotted border-grey-500 ml-20 absolute' >

              </div>
              <div className='w-2/3 h-24 ml-10 rounded-lg flex justify-center items-center flex-row '  style={{backgroundColor:'#F9c29A'}}>
                <p className='text-xl ' style={{color:'#082A49'}} >Open Tickets</p>
                <div className='w-8 h-8 rounded-2xl  ml-10 flex justify-center items-center' style={{backgroundColor:'#FFFFFF'}} >

                <p className='text-md  ' style={{color:'#082A49'}} >20</p>
                </div>
              </div>
            </div>
          </div>


{/* right side */}

          <div className='w-1/2 h-full  flex justify-center items-center flex-col ' style={{minWidth:500}}> 
          <div className='w-2/3 h-36 border-2 border-grey-500 shadow-md rounded-lg flex items-center'  onClick={()=>handleTicketList("Resolved")} >
              <div className='h-36 border-2 border-dotted border-grey-500 ml-20 absolute' >

              </div>
              <div className='w-2/3 h-24 ml-10 rounded-lg flex justify-center items-center flex-row'  style={{backgroundColor:'#FEB7B1'}}>
                <p className='text-xl ' style={{color:'#082A49'}} >Resolved Tickets</p>
                <div className='w-8 h-8 rounded-2xl  ml-10 flex justify-center items-center' style={{backgroundColor:'#FFFFFF'}} >

<p className='text-md  ' style={{color:'#082A49'}} >20</p>
</div>              </div>
            </div>





            <div className='w-2/3 h-36 border-2 border-grey-500 shadow-md rounded-lg flex items-center mt-10' >
              <div className='h-36 border-2 border-dotted border-grey-500 ml-20 absolute'  onClick={()=>handleTicketList("Closed")} >

              </div>
              <div className='w-2/3 h-24 ml-10 rounded-lg flex justify-center items-center flex-row '  style={{backgroundColor:'#E96973'}}>
                <p className='text-xl ' style={{color:'#082A49'}} >Closed Tickets</p>
                <div className='w-8 h-8 rounded-2xl  ml-10 flex justify-center items-center' style={{backgroundColor:'#FFFFFF'}} >

<p className='text-md  ' style={{color:'#082A49'}} >20</p>
</div>              </div>
            </div>
</div>
        </div>
    </div>
    

    </div>
  )
}
