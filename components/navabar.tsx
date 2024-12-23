'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image"
import { usePathname } from "next/navigation";
import { useState } from 'react'

const Navbar : React.FC = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const Handleopen = () => {
        setIsOpen(!isOpen)
    }

    return(
        <nav className="bg-[#9b577a] text-white top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          <Link href="/"> 
          <Image src="/mylogo.png" alt="Logo" width={50} height={50} className="logo" /> 
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block text-xl "
          aria-label="Toggle Navigation"
        >
          ☰
        </button>

        {/* Links */}
        <div
          className={`flex flex-col md:flex-row md:items-center gap-6 absolute md:static md:bg-transparent bg-[#9b577a] w-full md:w-auto top-[70px] md:top-auto left-0 transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          } md:flex`}
        >
          <Link
            href="/"
            className={`px-4 py-2 hover:text-[#660e60] hover:underline ${
              pathname === '/' ? 'text-[#660e60] font-bold' : ''
            }`}
            onClick={Handleopen} // Close menu on click
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`px-4 py-2 text-white font-bold hover:text-[#660e60] hover:underline ${
              pathname === '/about' ? 'text-[#660e60] font-bold' : ''
            }`}
            onClick={Handleopen} // Close menu on click
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`px-4 py-2 text-white font-bold hover:text-[#660e60] hover:underline ${
              pathname === '/projects' ? 'text-[#660e60] font-bold' : ''
            }`}
            onClick={Handleopen} // Close menu on click
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`px-4 py-2 text-white font-bold hover:text-[#660e60] hover:underline ${
              pathname === '/contact' ? 'text-[#660e60] font-bold' : ''
            }`}
            onClick={Handleopen} // Close menu on click
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
    )
}


export default Navbar;