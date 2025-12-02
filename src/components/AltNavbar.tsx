import React from 'react';
import { Link } from 'react-router-dom';

export default function AltNavbar() {
  return (
    <header className="relative h-screen w-full overflow-hidden font-futura">
      {/* 1. Background Image */}
      {/* Replace '/path/to/crowd-image.jpg' with your actual image import or URL */}
      <div className="absolute inset-0">
        <img 
          src="/peeps.png" // Replace this with your actual image
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
          <Link to="/about" className="hover:text-white transition-opacity uppercase pt-2">
            About
          </Link>

          {/* Center Logo */}
          <div className="flex flex-col items-center gap-1">
            {/* Custom SVG Logo based on image */}
            <Link to='/'>
            <img src="/logo.png" alt="" width='60px' height='71px' />

            </Link>
          </div>

          {/* Right Link */}
          <Link to="/lens" className="hover:text-white transition-opacity uppercase pt-2">
            Lens
          </Link>
        </nav>

        {/* Center Hero Text */}
        <div className="flex flex-col items-center justify-center font-rhode w-full">
          <h1 className="flex flex-col items-center text-center text-[#F3ECDD] leading-[0.85] tracking-tighter">
            {/* 
              NOTE: For the exact look, use a font like 'Bebas Neue' or 'Antonio'.
              I've used standard classes to approximate the condensed bold look.
            */}
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
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
}