import React from 'react'
import Navbar from '@/components/Navbar'
import "../globals.css";
import { NAVBAR_HEIGHT } from '@/lib/constants';


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full w-full'>
    <Navbar />
      <main className={'h-full w-full flex flex-col'} style={{ paddingTop:`${NAVBAR_HEIGHT}px` }}>
        {children}
      </main>
    </div>
  )
}

export default layout