import { NAVBAR_HEIGHT } from '@/lib/constants';
import React from 'react';
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-50 shadow-xl'
    style={{height: `${NAVBAR_HEIGHT}px`}}>
      <div className='flex justify-between item-center w-full py-3 px-8 bg-primary-700 text-white'>
        <div className="flex item-center gap-4 md:gap-6">
          <Link href="/" className="cursor-pointer hover:!text-primary-300" scroll={false}>
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="logo" className="w-6 h-6" /> 
              <div className="font-bold text-xl">NEXT.JS
                <span className="text-secondary-500 font-light hover:!text-primary-300">Template</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar