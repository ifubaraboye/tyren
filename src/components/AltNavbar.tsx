import React from 'react';
import { Link } from 'react-router-dom';

export default function AltNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="relative h-screen w-full overflow-hidden font-futura">
      {/* 1. Background Image */}
      <div className="absolute inset-0">
        <img
          src="/peeps.png"
          alt="Crowd background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay to make text readable */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 flex flex-col justify-between h-full px-6 py-8 md:px-12 md:py-10">

        {/* Top Navigation */}
        <nav className="flex justify-between items-start w-full text-xs md:text-sm font-bold tracking-widest text-[#F0EAD6]">
          {/* Left Link */}
          <Link to="/about" className="hidden md:block hover:text-white transition-opacity uppercase pt-2">
            About
          </Link>

          {/* Center Logo */}
          <div className="flex flex-col items-center gap-1">
            <Link to='/'>
              <img src="/logo.png" alt="" width='60px' height='71px' />
            </Link>
          </div>

          {/* Right Link */}
          <Link to="/lens" className="hidden md:block hover:text-white transition-opacity uppercase pt-2">
            Lens
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#F0EAD6] pt-2 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-40 bg-black/90 flex flex-col items-center justify-center space-y-8 md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
            }`}
        >
          <Link
            to="/"
            className="text-[#F0EAD6] text-xl tracking-widest font-bold uppercase hover:opacity-70 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[#F0EAD6] text-xl tracking-widest font-bold uppercase hover:opacity-70 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/lens"
            className="text-[#F0EAD6] text-xl tracking-widest font-bold uppercase hover:opacity-70 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          >
            Lens
          </Link>
        </div>

        {/* Center Hero Text */}
        <div className="flex flex-col items-center justify-center font-rhode w-full">
          <h1 className="flex flex-col items-center text-center text-[#F3ECDD] leading-[0.85] tracking-tighter">
            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black uppercase whitespace-nowrap">
              We are the ones
            </span>
            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black uppercase whitespace-nowrap">
              We've been
            </span>
            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black uppercase whitespace-nowrap">
              Waiting for
            </span>
          </h1>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="flex justify-center pb-4">
          <button
            aria-label="Scroll down"
            className="text-[#F0EAD6] animate-bounce hover:text-white transition-colors"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
}