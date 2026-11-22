'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import HeaderTopBar from './HeaderTopBar'
import styles from './Header.module.css'

const I = '/images/'

export default function Header() {
  const [open, setOpen] = useState(false)
  const nav = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Specials', '#specials'],
    ['Menu', '#menu'],
    ['Catering', '#catering'],
    ['Gallery', '#gallery'],
    ['Contact', '#contact'],
  ]
  return (
    <header
      className={`absolute top-0 left-0 w-full z-30 text-white border-0 ${styles.header}`}
    >
      <HeaderTopBar />
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        <a href="#home" className="bg-white rounded-md p-1">
          <img
            src={I + 'logo1.png'}
            alt="A1 Sweets logo"
            className="w-24 h-16 object-contain"
          />
        </a>
        <nav className="hidden lg:flex gap-6 items-center text-xs font-bold tracking-widest uppercase">
          {nav.map(([a, b]) => (
            <a key={a} href={b} className="hover:text-yellow">
              {a}
            </a>
          ))}
        </nav>
        {/* <a
            href="#contact"
            className="hidden md:inline-block bg-red px-6 py-3 font-bold uppercase text-xs tracking-wider hover:bg-navy"
          >
            Enquire Now
          </a> */}
        <button
          aria-label="Toggle menu"
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden bg-navy flex flex-col gap-4 px-7 py-6">
          {nav.map(([a, b]) => (
            <a key={a} href={b} onClick={() => setOpen(false)}>
              {a}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
