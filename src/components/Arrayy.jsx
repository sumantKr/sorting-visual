import React from 'react'
import { useState, useEffect } from 'react'

export default function Arrayy({ size, speed }) {

    const [barArray, setbarArray] = useState(
        Array.
            from({ length: size },
                (_, i) => [i, Math.floor(Math.random() * 300 + 100)])
    );
    useEffect(() => {
        setbarArray(   Array.
            from({ length: size },
                (_, i) => [i, Math.floor(Math.random() * 300 + 100)]))
    }, [size])

    return (
        <div className=' flex w-[95%] h-3/4 justify-between '>
            {
                barArray.map(item => {
                    return <div key={item[0]} style={{ height: `${item[1]}px` }} className={` flex-1  border-[1px] my-[0.1px] bg-[#3f4af1]`}></div>
                })
            }
        </div>
    )
}
