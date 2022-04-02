import React from 'react'
import { useState, useEffect } from 'react';
import { Arrayy } from './index'
export default function Main() {
  const [size, setSize] = useState(35);
  const [speed, setspeed] = useState(1);

  useEffect(() => {
    console.log('render', size);
  }, [size])


  return (
    <div className='flex justify-center items-center w-[100vw] h-[93vh]'>
      <div className='flex justify-center items-end relative glass-section h-[85%] w-4/5'>
        <div className='w-full absolute top-5 '>
          <div className='text-lg text-gray-700 mx-auto w-3/4   flex text-center justify-between'>
            <div className='flex flex-col'>
              <label>Size of Array</label>
              <input className='w-[200px]' type="range" min="35" max="65" onChange={(e) => { setSize(e.target.value) }} />
            </div>
            <div className='flex flex-col'>
              <label>Speed of Sort</label>
              <input className='w-[200px] ' type="range" min="1" max="5" onChange={(e) => { setspeed(e.target.value) }} />
            </div>
            <div className='flex justify-center items-center'>
              <button className='btn py-3 px-6'>Start Sort</button>
            </div>
          </div>

        </div>
        {
          (console.log(size))}
        {
          <Arrayy size={size} speed={speed} />
        }
      </div>
    </div>
  )
}
