import "./App.css";
import { Instagram } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center text-center items-center px-4 sm:py-0">
      {/* Logo and description section */}
      <div className="mb-8 sm:mb-0">
        <img
          src="/logo.png"
          width={250}
          className="inline-flex pb-8 sm:pb-8 w-28 sm:w-36"
          alt="TYREN Logo"
        />
        <div className="font-rhode text-6xl sm:text-5xl md:text-7xl text-[#F3ECDD] sm:py-5 my-2 sm:my-0">
          <p>THE AWAKENING</p>
          <p>IS ON THE WAY</p>
        </div>
      </div>

      {/* Main heading */}

      {/* Desktop / Tablet version */}
<p className="font-futura text-md sm:text-lg hidden text-[#F3ECDD] sm:flex md:text-2xl sm:pb-16 sm:pt-8">
  TYREN is a civic and cultural awakening engineered to turn Africa's{" "}
  <br className="hidden sm:block" />
  youth bulge into the world's greatest reform movement.{" "}
  <br className="hidden sm:block" />
  We are not a party. Not an NGO. Not another protest.
</p>

{/* Mobile version */}
<p className="font-futura text-lg sm:text-lg flex text-[#F3ECDD] sm:hidden md:text-2xl pb-8 pt-1 text-center">
  TYREN is a civic and cultural <br /> awakening engineered to turn Africa's <br /> youth
  bulge into the world's greatest <br /> reform movement. <br /> We are not a party. Not an
  NGO. <br />Not another protest.
</p>

      {/* CTA and social section */}
      <div className="mt-2 sm:mt-0">
        {/* Mobile */}
        <p className="font-futura text-lg sm:text-lg text-[#F3ECDD] md:text-2xl px-10 mb-4 sm:mb-5 flex sm:hidden ">
  We are currently working on our website.
</p>
<p className="font-futura text-lg sm:text-lg md:text-2xl text-[#F3ECDD] mb-4 sm:mb-5 hidden sm:flex">
  We are working on our website.
</p>

        <div className="flex gap-x-5 justify-center items-center py-4 sm:py-0">
          <a
            href="https://www.instagram.com/tyrennow/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-9 h-9 text-[#F3ECDD]" />
          </a>
          <a 
  href="https://x.com/Tyrennow"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="w-8 h-8 bi bi-twitter-x text-[#F3ECDD] transition-colors duration-200"
  >
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
  </svg>
</a>

          
        </div>
      </div>
    </div>
  );
}

export default App;
