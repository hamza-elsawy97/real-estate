import Link from 'next/link';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const FooterSection = () => {
  return (
    <footer className="border-gray-200 py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px8">
        <div className="flex flex-col md:flex-row justify-center items-center space-x-4 md:gap-12">
          <div className="mb-4">
            <Link href="/" className='text-xl font-bold' scroll={false}>RENTIFUL</Link>
          </div>
          <nav className='mb-4'>
            <ul className="flex space-x-6">
              <li>
                <Link href="/about" className="">About Us</Link>
              </li>
              <li>
                <Link href="/about" className="">Contact Us</Link>
              </li>
              <li>
                <Link href="/faq" className="">FAQ</Link>
              </li>
              <li>
                <Link href="/terms" className="">Terms</Link>
              </li>
              <li>
                <Link href="/privacy" className="">Privacy</Link>
              </li> 
            </ul>
          </nav>
          <div className="flex space-x-4 mb-4">
            <a href="#" target="_blank" aria-label='facebook' className="hover:text-primary-600">
              <FontAwesomeIcon icon={faFacebook} className='h-6 w-6' />
            </a>
            <a href="#" target="_blank" aria-label='facebook' className="hover:text-primary-600">
              <FontAwesomeIcon icon={faInstagram} className='h-6 w-6' />
            </a>
            <a href="#" target="_blank" aria-label='facebook' className="hover:text-primary-600">
              <FontAwesomeIcon icon={faYoutube} className='h-6 w-6' />
            </a>
            <a href="#" target="_blank" aria-label='facebook' className="hover:text-primary-600">
              <FontAwesomeIcon icon={faLinkedin} className='h-6 w-6' />
            </a>
            <a href="#" target="_blank" aria-label='facebook' className="hover:text-primary-600">
              <FontAwesomeIcon icon={faTwitter} className='h-6 w-6' />
            </a>

          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500 flex justify-center space-x-4">
          <p>&copy; {new Date().getFullYear()} RENTIFUL. All rights reserved.</p>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/cookies">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection