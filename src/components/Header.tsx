'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Your Name</span>
            <span className="text-sm text-gray-600">Coding Car Enthusiast</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
            <Link href="/testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">Portfolio</Link>
            <Link href="/cars" className="text-gray-600 hover:text-blue-600 transition-colors">Cars</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/account" className="text-gray-600 hover:text-blue-600 transition-colors">My account</Link>
            <Link href="/login" className="text-gray-600 hover:text-blue-600 transition-colors">Log in</Link>
            <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors inline-block text-center">Let&apos;s Build</Link>
          </nav>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="mt-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="/testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</Link>
              <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">Portfolio</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/account" className="text-gray-600 hover:text-blue-600 transition-colors">My account</Link>
              <Link href="/login" className="text-gray-600 hover:text-blue-600 transition-colors">Log in</Link>
              <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors inline-block text-center">Let&apos;s Build</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

