'use client';

import Image from 'next/image'
import { useState } from 'react';


export default function Home() {


  return (
    <main>
      <div className='mx-auto container mt-20'>
        <p className='text-6xl text-bold border-b-[0.1em] border-emerald-500 inline-block'>HHC Dealer</p>
      </div>


      <div className='mt-20 p-4 md:p-3'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center justify-center py-8 border-b-[0.4em] border-emerald-500 rounded shadow-lg">
          
        <div className="text-lg text-gray-600 justify-end mb-4">Disponible</div>

        <div className="text-3xl font-bold mb-2 text-center text-transparent bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text">Amnesia HHC</div>
          <img src="https://legrossisteducbd.fr/wp-content/uploads/2022/12/Fleurs-Amnesia-Frozen-HHC-Indoor-1024x1024.webp" alt="John Doe" className="w-40 h-40 object-cover rounded-full mb-2 hover:scale-110 transition duration-300 ease-in-out"/>
        </div>
        <div className="flex flex-col items-center justify-center py-8 border-b-[0.4em] border-emerald-500 rounded shadow-lg">
        <div className="text-3xl font-bold mb-2 text-center text-transparent bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text">Amnesia HHC</div>
          <img src="https://legrossisteducbd.fr/wp-content/uploads/2022/06/Fleurs-HHC-10-Super-Silver-Haze-1-1024x1024.webp" alt="John Doe" className="w-40 h-40 object-cover rounded-full mb-2 hover:scale-110 transition duration-300 ease-in-out"/>
          <div className="text-lg text-gray-600">100 points</div>
        </div>
        <div className="flex flex-col items-center justify-center py-8 border-b-[0.4em] border-emerald-500 rounded shadow-lg">
        <div className="text-3xl font-bold mb-2 text-center text-transparent bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text">OG Kush HHC</div>
          <img src="https://legrossisteducbd.fr/wp-content/uploads/2022/12/Fleurs-CBD-Purple-Haze-Glass-House-2.png" alt="John Doe" className="w-40 h-40 object-cover rounded-full mb-2 hover:scale-110 transition duration-300 ease-in-out"/>
          <div className="text-lg text-gray-600">100 points</div>
        </div>
        


      </div>


    </div>
    </main>
  )
}
