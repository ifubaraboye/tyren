import React from "react";
import { Link } from "react-router-dom";

export default function TyrenHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <header
        className="relative w-full h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden"
        style={{
          backgroundColor: "#103926",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Main Content Container */}
        <div className="w-full max-w-[1400px] px-6 md:px-12 flex flex-col items-center justify-center z-10">

          {/* 1. Top Logo - Increased mb to move it higher up */}
          <div className="mb-12 md:mb-16">
            <img
              src="/logo2.png"
              alt="logo"
              className="w-16 h-16 md:w-[93px] md:h-[93px] object-contain"
            />
          </div>

          {/* 2. Middle Row: ABOUT - TYREN - LENS */}
          {/* Changed items-center to items-start for top alignment */}
          <div className="w-full flex items-start justify-between">

            {/* Left Link */}
            <div className="hidden md:block w-32 text-left pt-2 md:pt-4">
              <Link
                to="/about"
                className="text-[#efe9db] text-xs md:text-sm tracking-[0.2em] font-medium hover:opacity-70 transition-opacity"
              >
                ABOUT
              </Link>
            </div>

            {/* Center Big Text */}
            <div className="flex-1 px-4 md:px-0 flex justify-center">
              <Link to="/">
                <img
                  src="/tyrentext.png"
                  alt="TYREN"
                  className="w-full max-w-[280px] md:max-w-4xl object-contain"
                />
              </Link>
            </div>

            {/* Right Link */}
            <div className="hidden md:block w-32 text-right pt-2 md:pt-4">
              <Link
                to="/lens"
                className="text-[#efe9db] text-xs md:text-sm tracking-[0.2em] font-medium hover:opacity-70 transition-opacity"
              >
                LENS
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute top-8 right-6 z-50 text-[#efe9db]"
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

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 z-40 bg-[#103926] flex flex-col items-center justify-center space-y-8 md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
              }`}
          >
            <Link
              to="/"
              className="text-[#efe9db] text-xl tracking-[0.2em] font-medium hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="text-[#efe9db] text-xl tracking-[0.2em] font-medium hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              to="/lens"
              className="text-[#efe9db] text-xl tracking-[0.2em] font-medium hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              LENS
            </Link>
          </div>

          {/* 3. Tagline */}
          <div className="mt-8 md:mt-12 text-center">
            <p className="text-[#efe9db]/90 text-sm md:text-[21px] leading-relaxed font-light">
              A civic and cultural awakening engineered to turn Africa’s youth bulge
              <br className="hidden md:block" />
              {" "}into the world’s greatest reform movement.
            </p>
          </div>

          {/* 4. Chevron */}
          <div className="mt-16 md:mt-20">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce opacity-80 cursor-pointer"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="#efe9db"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Decorative Borders/Overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-[#051815]" />
      </header>
    </>
  );
}