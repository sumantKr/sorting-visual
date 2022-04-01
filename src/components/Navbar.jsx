import React from 'react'

export default function Navbar() {
    return (
        <div className='w-[100vw] h-[7vh] glass flex items-center justify-center   '>
            <nav className='lg:w-[70%]  w-[95%] text-base flex justify-between items-center   mx-auto  '>
                <div>SORTING VISUALISER</div>
                <ul className='flex justify-between px-20 w-[45%]'>
                    <button className='btn'>Bubble</button>
                    <button className='btn'>Selection</button>
                    <button className='btn'>Insertion</button>
                </ul>
            </nav>
        </div>
    )
}
