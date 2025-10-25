import './App.css'

function App() {
  

  return (
    <div className='font-bold h-screen flex flex-col justify-center text-center items-center'>
      <div>
        <img src='/logo.png' width={250} className='inline-flex pb-8'/>
        <p className='font-futura text-2xl'>TYREN is a civic and cultural awakening engineered to turn Africa's <br />
youth bulge into the world's greatest reform movement. <br />
We are not a party. Not an NGO. Not another protest.</p>
      </div>

      <div className='font-rhode text-7xl py-5'>
        <p>THE AWAKENING</p>
        <p>IS ON THE WAY</p>
      </div>

      
      <div>
        <p className='font-futura text-2xl'>We are working on our website. Follow the Movement</p>
        <div className='flex gap-x-2 justify-center py-5'>
           <span class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-white"></span>
           <span class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-white"></span>
        </div>
      </div>
    </div>
  )
}

export default App
