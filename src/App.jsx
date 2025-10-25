import "./App.css"

function App() {
  return (
    <div className="font-bold min-h-screen flex flex-col justify-center text-center items-center px-4 py-9 sm:py-0">
      {/* Logo and description section */}
      <div className="mb-8 sm:mb-0">
        <img src="/logo.png" width={250} className="inline-flex pb-8 sm:pb-8 w-48 sm:w-64" alt="TYREN Logo" />
        <p className="font-futura sm:text-lg md:text-2xl">
          TYREN is a civic and cultural awakening engineered to turn Africa's <br className="hidden sm:block" />
          youth bulge into the world's greatest reform movement. <br className="hidden sm:block" />
          We are not a party. Not an NGO. Not another protest.
        </p>
      </div>

      {/* Main heading */}
      <div className="font-rhode text-5xl sm:text-5xl md:text-7xl  sm:py-5 my-2 sm:my-0">
        <p>THE AWAKENING</p>
        <p>IS ON THE WAY</p>
      </div>

      {/* CTA and social section */}
      <div className="mt-2 sm:mt-0">
        <p className="font-futura text-lg sm:text-lg md:text-2xl mb-4 sm:mb-5">
          We are working on our website. Follow the Movement
        </p>
        <div className="flex gap-x-2 justify-center py-4 sm:py-0">
          <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-white"></span>
          <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-white"></span>
        </div>
      </div>
    </div>
  )
}

export default App
