import React from 'react'
import { useState } from 'react';
import {Arrayy} from './index'
export default function Main() {
  const [size,setSize]=useState(25);
  const [speed,setspeed]=useState(1);
  const [click,setClick]=useState(false);
  const [change,setChange]=useState(false);

 
  return (
    <div className='flex justify-center items-center w-[100vw] h-[93vh]'>
      <div className='flex justify-center items-end relative glass-section h-[85%] w-4/5'>
        <div className='w-full absolute top-5 '>
          <div className='text-lg text-gray-700 mx-auto w-4/5   flex text-center justify-between'>
            <div className='flex flex-col'>
              <label>Size of Array</label>
              <input className='w-[200px]' type="range" min="19" max="51" onChange={(e) => {setSize(e.target.value);setChange(true); console.log(size)} } />
            </div>
            <div className='flex flex-col'>
              <label>Speed of Array</label>
              <input className='w-[200px] ' type="range" min="1" max="5" onChange={(e) => {setspeed(e.target.value);setChange(true); console.log(speed)}}/></div>
            <button className='p-[10px] btn' onClick={()=>{setClick(true);setChange(false); console.log(click)}}>Generate New Array</button>
          </div>
        </div>
        {
          (click||change)  ?  <Arrayy size={size}  speed={speed}/>:
          <Arrayy size={25}  speed={1}/>
        }
        </div>
    </div>
  )
}
