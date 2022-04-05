import React from 'react'
import { useState,useEffect } from 'react';

import { Navbar,Main } from './components'
export default function App() {
  const [sort, setSort] = useState('Bubble');
  useEffect(() => {
    console.log('render app');
  }, [])
  return (
    <section className='text-white min-h-screen w-[100vw] background-gradient text-2xl '>
      <Navbar setSort={setSort}/>
      <Main sort={sort} />
    </section>
  )
}
