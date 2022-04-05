import React from 'react'
import { useEffect, useState } from 'react';
import { bubbleSort, selectionSort, insertionSort } from './SortingAlgorithms';
const Sorting = ({ size, speed, sort, startSort, setStartSort }) => {
  const [arr, setArr] = useState();
  const [barArray, setbarArray] = useState(
    Array.
      from({ length: size },
        (_, i) => [i, Math.floor(Math.random() * 300 + 100)])
  );
  useEffect(() => {
    setbarArray(Array.
      from({ length: size },
        (_, i, color) => [i, Math.floor(Math.random() * 300 + 100)]))
  }, [size])

  useEffect(() => {
    console.log('render sorting');
    setArr(document.querySelector("#array"))
  }, [])

  return (
    <div className='w-full  flex justify-center'>
      <div id="array" className='flex flex-row-reverse w-[95%] h-3/4 justify-between rotate-180'>
        {
          barArray.map(item => {
            return <div key={item[0]} style={{ backgroundColor: '#3f4af1', height: `${item[1]}px` }} className={` flex-1  border-[1px] my-[0.1px] `}>
            </div>
          })
        }
      </div>
      {
        (

          sort === 'Bubble' ?

            startSort && bubbleSort(arr)
            :
            sort === 'Insertion' ?
              startSort && insertionSort(arr)
              :
              startSort && selectionSort(arr)
        )
        && setStartSort(false)
      }
    </div>
  )
}
export default Sorting;
