import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useLocation } from 'react-router'
// import { TicketDataContext } from './TicketList'; 

export default function TicketDetails() {
    const location = useLocation()
    // const TicketDataContet = TicketDataContext();
    // console.log(TicketDataContet)
    const arraofcontents = [
        {
            
            'content':'Documents 1',
            'url':'http://'
        },
        {
            
            'content':'Documents 2',
            'url':'http://'
        },
        {
            
            'content':'Documents 3',
            'url':'http://'
        },
        {
            
            'content':'Documents 4',
            'url':'http://'
        },
        {
            
            'content':'Documents 5',
            'url':'http://'
        },
    ]

    const handleContentShow = async(url)=>{
        // console.log(url)
    }

    const handleImageClick = () => {
        const input = document.createElement("input");
    
        input.type = "file";
    
        input.accept = "*/*";
    
        input.onchange = async (event) => {
    
          let file = event.target.files[0];
          console.log(file)
    
        };
    
        input.click();
      };
  return (
    <div className='w-full h-screen'>
        <Navbar />
        <div className='w-full h-[88%] flex justify-center'>
            <div className='w-[60%] h-full border-2 border-red-500 overflow-y-auto flex-col' >

<div className='w-full h-24 border-2 flex flex-row'>
<div className='w-[68%] h-full border-r-2' >
    <p className='text-xl ml-12 mt-2' style={{color:'#082A49'}} >This is the first tickets we created</p>
    <p className='text-md ml-12' style={{color:'#000000'}} >This is the first tickets we createdand its dexirption is this</p>


</div>
<div className='w-[32%] h-full flex justify-center items-center ' >
<select className='p-2'>
                                <option value='Resolved'>Resolved</option>
                                <option value='Not Resolved'>Not Resolved</option>
                                <option value='Closed'>Closed</option>
                            </select>
</div>
</div>

{
    arraofcontents.map((items,index)=>(
        <>
        <div className='w-full h-12 border-b-2 flex flex-row mt-2 items-center '>
        <img src={require('../images/attachment.png')} className='ml-2' onClick={()=>handleContentShow(items.url)} />
        <p className='text-lg ml-12' style={{color:'#082A49'}} onClick={()=>handleContentShow(items.url)} >{items.content}</p>
        </div>
        </>
    ))
}
<button className='w-32 h-12 border-2' style={{backgroundColor:'#85A1EE'}} onClick={()=>handleImageClick()} > Add Content</button>

            </div>

        </div>
      
    </div>
  )
}
