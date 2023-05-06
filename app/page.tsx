'use client';

import Image from 'next/image'
import { useState } from 'react';

import { Button } from "@chakra-ui/react";
import { FaJoint } from 'react-icons/fa'; 

export default function Home() {

  const exemplePrice = 1000;

  return (
    <main>




      <div className='mx-auto container mt-20 flex justify-center items-center'>
        <img src="/weed.png" className='w-[64px]'></img>
        <p className='text-4xl md:text-6xl font-bold border-b-[0.1em] border-emerald-500 ml-4'>HHC Dealer</p>
      </div>


      <div className='mt-20 p-4 md:p-3'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-lg mx-auto">

        <div className="flex flex-col items-center justify-center py-8 border-b-[0.4em] border-emerald-500 rounded shadow-lg">
        <div className="text-3xl font-bold mb-2 text-center text-transparent bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text">Amnesia HHC</div>
          <img src="https://legrossisteducbd.fr/wp-content/uploads/2022/12/Fleurs-Amnesia-Frozen-HHC-Indoor-1024x1024.webp" alt="John Doe" className="w-40 h-40 object-cover rounded-full mb-2 hover:scale-110 transition duration-300 ease-in-out"/>


          <div className="flex mt-5">
              <button className="bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 text-white font-bold py-2 px-4 rounded shadow-lg">
                Ajouter au panier
              </button>
              <select className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm ml-2 shadow-lg">
                <option>{exemplePrice.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}</option>
              </select>
            </div>

        </div>

        <div className="flex flex-col items-center justify-center py-8 border-b-[0.4em] border-emerald-500 rounded shadow-lg">
        <div className="text-3xl font-bold mb-2 text-center text-transparent bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text">Amnesia HHC</div>
          <img src="https://legrossisteducbd.fr/wp-content/uploads/2022/06/Fleurs-HHC-10-Super-Silver-Haze-1-1024x1024.webp" alt="John Doe" className="w-40 h-40 object-cover rounded-full mb-2 hover:scale-110 transition duration-300 ease-in-out"/>
          <div className="text-lg text-gray-600">100 points</div>

          <Button>Ajouter au panier</Button>

        </div>

        <div className="flex flex-col items-center justify-center py-8 border-b-[0.4em] border-emerald-500 rounded shadow-lg">
        <div className="text-3xl font-bold mb-2 text-center text-transparent bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text">OG Kush HHC</div>
          <img src="https://legrossisteducbd.fr/wp-content/uploads/2022/12/Fleurs-CBD-Purple-Haze-Glass-House-2.png" alt="John Doe" className="w-40 h-40 object-cover rounded-full mb-2 hover:scale-110 transition duration-300 ease-in-out"/>
          <div className="text-lg text-gray-600">100 points</div>

          <Button>Ajouter au panier</Button>

        </div>
        
        
        <div className="flex flex-col items-center justify-center py-8 border-b-[0.4em] border-emerald-500 rounded shadow-lg">
        <div className="text-3xl font-bold mb-2 text-center text-transparent bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text">OG Kush HHC</div>
          <img src="https://legrossisteducbd.fr/wp-content/uploads/2022/12/Fleurs-CBD-Purple-Haze-Glass-House-2.png" alt="John Doe" className="w-40 h-40 object-cover rounded-full mb-2 hover:scale-110 transition duration-300 ease-in-out"/>
          <div className="text-lg text-gray-600">100 points</div>

          <Button>Ajouter au panier</Button>

        </div>
        


      </div>


    </div>
    </main>
  )
}
