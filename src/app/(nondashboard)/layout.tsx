import React from 'react'
import Navbar from '@/components/Navbar'
import "../globals.css";


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
    <Navbar />
      <main className="h-full w-full flex flex-col pt-[${NAVBAR_HEIGHT}px]">
        {children}
      </main>
    </div>
  )
}

export default layout