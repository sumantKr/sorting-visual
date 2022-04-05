import React from 'react'
import { useEffect } from 'react';

export default function Navbar({setSort}) {
    useEffect(() => {
        console.log('render nav');
      }, [])
    
    return (
        <div className='w-[100vw] h-[7vh] glass flex items-center justify-center   '>
            <nav className='lg:w-[70%]  w-[95%] text-base flex justify-between items-center   mx-auto  '>
                <div>SORTING VISUALISER</div>
                <ul className='flex justify-between px-20 w-[45%]'>
                    <button className='btn' onClick={(e)=>setSort(e.target.innerText)}>Bubble</button>
                    <button className='btn' onClick={(e)=>setSort(e.target.innerText)}>Selection</button>
                    <button className='btn' onClick={(e)=>setSort(e.target.innerText)}>Insertion</button>
                </ul>
            </nav>
        </div>
    )
}
