'use client';

import { RiShoppingCartLine } from 'react-icons/ri';
import { Box, Skeleton, SkeletonCircle, SkeletonText, Stack, useDisclosure} from '@chakra-ui/react';
import CartModal from './components/cartModal';
import { useEffect, useState } from 'react';
import {LocalStorageManager, addToCart} from './db/localStorageManager';
import { FiThermometer, FiPackage, FiTag} from 'react-icons/fi';
import { BiRuler } from 'react-icons/bi';

// export async function getServerSideProps () {

//   console.log("SATUUUUC");
//   const stripe = await loadStripe(process.env.STRIPE_SECRET_KEY!);
  
//   console.log(stripe);

//   return {
//     props: {
//       products: []
//     },
//   };
// }


// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
async function getStripeProducts () {
  const res = await fetch(`/api/stripe`, {cache:"no-store"}); // for dev purpose but in production use case
  const products = await res.json();

  return products;
}

export default function Home() {


  const [stripeProductsList, setStripeProductsList] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure()


  const [searchWord, setSearchWord] = useState("");

  const [cart, setCart] = useState({});
  

  const [categories, setCategories] = useState(["HHC","CBD", "RESINE"]);
  const [categorySelected, setCategorySelected] = useState("HHC");

  const [productIsLoaded, setProductIsLoaded] = useState(false);

  useEffect( () => {


    LocalStorageManager(setCart);


    const fetchData = async () => {
      try {
        const {data} = await getStripeProducts();
        setStripeProductsList(data);
        setProductIsLoaded(true);
      } catch ( e ) {
        alert(e);
      }
    }

    fetchData();

  }, [])



  // TODO : Must be from Stripe products
  const products:any  = [
    {
      "id": "prod_123",
      "object": "product",
      "active": true,
      "description": "My Product Description",
      "name": "My Product Name",
      // TODO : ça n'existe pas dans Stripe response
      "productImageUrl": "https://legrossisteducbd.fr/wp-content/uploads/2022/12/Fleurs-Amnesia-Frozen-HHC-Indoor-1024x1024.webp",
      "prices": {
        "3g": {
          "id": "price_123_3g",
          "object": "price",
          "active": true,
          "currency": "usd",
          "unit_amount": 1000,
          "nickname": "3g"
        },
        "5g": {
          "id": "price_123_5g",
          "object": "price",
          "active": true,
          "currency": "usd",
          "unit_amount": 1500,
          "nickname": "5g"
        },
        "10g": {
          "id": "price_123_10g",
          "object": "price",
          "active": true,
          "currency": "usd",
          "unit_amount": 2500,
          "nickname": "10g"
        }
      }
    },
    {
      "id": "prod_124",
      "object": "product",
      "active": true,
      "description": "My Product Description",
      "name": "My Product Name",
      // TODO : ça n'existe pas dans Stripe response
      "productImageUrl": "https://legrossisteducbd.fr/wp-content/uploads/2022/12/Fleurs-Amnesia-Frozen-HHC-Indoor-1024x1024.webp",
      "prices": {
        "3g": {
          "id": "price_123_3g",
          "object": "price",
          "active": true,
          "currency": "usd",
          "unit_amount": 1000,
          "nickname": "3g"
        },
        "5g": {
          "id": "price_123_5g",
          "object": "price",
          "active": true,
          "currency": "usd",
          "unit_amount": 1500,
          "nickname": "5g"
        },
        "10g": {
          "id": "price_123_10g",
          "object": "price",
          "active": true,
          "currency": "usd",
          "unit_amount": 2500,
          "nickname": "10g"
        }
      }
    }
  ];

  
  const exemplePrice = 1000;

  return (
    <main>

  { JSON.stringify(stripeProductsList) }
  
      
      <p>CURRENT CART : {JSON.stringify(cart)}</p>
      
      <div className='mx-auto container mt-10 flex justify-center items-center'>
        <img src="/weed.png" className='w-[64px]'></img>
        <p className='text-4xl md:text-6xl font-bold border-b-[0.1em] border-emerald-500 ml-4'>Weedy</p>
      </div>

      <div className="bg-black text-white rounded-lg md:shadow-md overflow-hidden mx-auto container mt-10 bg-[url('https://media.discordapp.net/attachments/1102026209472286781/1107783960207040622/bsqkt_une_dalle_de_lave_08eb9515-b724-4d5b-b09a-dbf1b36f4ba4.png?width=974&height=974')] bg-no-repeat bg-cover bg-center bg-fixed">
        <div className={`flex flex-col md:flex-row items-center shadow-lg backdrop-brightness-50`} >
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            {/* Product Image */}
            <img src="https://www.expondo.fr/media/image/71/7a/a7/10010882-3_600x600.jpg" alt="Product" className="w-full h-auto" />
          </div>
          <div className="p-6 w-full md:w-1/2 bg-black p-2 rounded h-full w-full bg-black-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50">
            {/* Product Description */}
            <h2 className="text-2xl md:text-6xl font-bold mb-4">Product Title</h2>
            <div>
              <p className="text-lg mb-6">
                Profitez de délicieux barbecue toute l'année avec notre petit BBQ d'intérieur. Idéal pour les espaces restreints, cet appareil compact vous permet de préparer de savoureuses grillades dans le confort de votre maison.
              </p>            
              </div>
            <div className="flex flex-col items-start mb-4">
              <div className="flex items-center mb-2">
                <BiRuler className="mr-2 text-lg" />
                <span className="text-lg">Size: </span>
                <span className="ml-1 text-lg">XXL</span>
              </div>
              <div className="flex items-center mb-2">
                <FiThermometer className="mr-2 text-lg" />
                <span className="text-lg">Max Temperature: </span>
                <span className="ml-1 text-lg">200°C</span>
              </div>
              <div className="flex items-center mb-2">
                <FiPackage className="mr-2 text-lg" />
                <span className="text-lg">Material: </span>
                <span className="ml-1 text-lg">Stainless Steel</span>
              </div>
              <div className="flex items-center mb-2">
                <FiTag className="mr-2 text-lg" />
                <span className="text-lg">Category: </span>
                <span className="ml-1 text-lg">Kitchen Appliances</span>
              </div>
            </div>

                <div className="flex justify-center">
                <button className="relative bg-gradient-to-r from-yellow-400 to-red-600 text-white py-4 px-8 rounded-lg text-2xl font-bold shadow-lg hover:from-red-500 hover:to-yellow-300 hover:bg-opacity-80 transition-all overflow-hidden">
                    Acheter
                    <span className="absolute inset-0 border-4 border-orange-500 rounded-lg animate-pulse"></span>
                  </button>

                </div>

                
          </div>
        </div>
      </div>


      <div className='max-w-screen-lg mx-auto mt-10 mb-5 flex p-2'>
        <div className='flex w-full text-4xl p-2 justify-around'>

      {
        categories.map( (category:string, i:number) => <div onClick={e => setCategorySelected(category)}>
          
          <p className={`${categorySelected === category ? 
        'cursor-pointer border-b-4  border-emerald-500 p-2 font-bold' 
        :'cursor-pointer  border-emerald-500 p-2 font-bold'}`}>

          <span className="text-emerald-500">{category[0]}</span>
            {category.slice(1)}
          </p>
          </div>)
      }
        </div>
      </div>


      <div className='max-w-screen-lg mx-auto mt-10 mb-5 flex justify-between p-2 ' >
        
          <div className="relative">
          <input type="text" placeholder={`Recherche ${categorySelected} ...`}
          onChange={e => setSearchWord(e.target.value)}
           className="w-full py-2 pr-10 pl-4 leading-tight bg-emerald border-2 border-emerald-600 rounded-md focus:outline-none focus:bg-white focus:border-emerald-500"/>
          <div className="absolute inset-y-6 right-0 top-1 flex items-center px-2" onClick={e => stripeProductsList
            .filter( (p:any) => p.metadata.category === categorySelected && p.name.toLowerCase().includes(searchWord.toLowerCase()))
            }>
                <svg className="w-6 h-6 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.875-4.875"></path>
                  <circle cx="10" cy="10" r="8"></circle>
                </svg>
              </div>
            </div>
        

        <div className="relative" onClick={onOpen}>
            <RiShoppingCartLine className="text-6xl p-2 cursor-pointer"></RiShoppingCartLine>
            {
              cart && Object.keys(cart).length !== 0 && 
              <span className="p-1 cursor-pointer absolute top-0 right-0 inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-full w-6 h-6 text-xs font-bold">
                { Object.values(cart).reduce( (accumulator:number, currentProduct:any) => accumulator + currentProduct.quantity , 0 ) }
              </span>
            }
          </div>
      </div>



      <div className='p-4 md:p-3'>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-lg mx-auto">

        {
          stripeProductsList && stripeProductsList.filter( (p:any) => p.metadata.category === categorySelected).length > 0 && stripeProductsList.filter( (p:any) => p.metadata.category === categorySelected).map(( product:any, i:number ) => {
            return (
              <SkeletonText mt='10' noOfLines={8} spacing='4' skeletonHeight='3' isLoaded={productIsLoaded}>
              
                <div className="flex flex-col items-center justify-center py-8 border-b-[0.4em] border-emerald-500 rounded shadow-lg">
                <div className="text-3xl font-bold mb-2 text-center text-transparent bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text">{product.name}</div>
                <img src={`${product.images[0]}`} alt="John Doe" className="w-40 h-40 object-cover rounded-full mb-2 hover:scale-110 transition duration-300 ease-in-out"/>
                  <div className="p-3">
                    <p>{product.description}</p>
                  </div>
                <div className="flex mt-5">
                    <button className="bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 text-white font-bold py-2 px-4 rounded shadow-lg text-sm md:text-lg"
                    onClick={ e => {
                      addToCart({"name": `product-${i}`}, setCart);
                    } }>
                      Ajouter au panier
                    </button>
                    <select className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm ml-2 shadow-lg">
                      <option>{exemplePrice.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}</option>
                    </select>
                </div>
                </div>

                </SkeletonText>
            )
          })
        }


        <CartModal onClose={onClose} onOpen={onOpen} isOpen={isOpen} cart={cart} setCart={setCart}></CartModal>


        
      


{/* 
        <div className="flex items-center justify-center">
        <div className="h-24 w-24 rounded-full bg-gray-200 relative">
          <div className="absolute inset-0 rounded-full bg-gray-200 ring-4 ring-offset-4 ring-yellow-100 animate-pulse">
            XD
          </div>
        </div>
      </div> */}


        {/* <div className="relative bg-transparent rounded-full">
          <div className="absolute inset-0 bg-cover bg-center filter blur-md  bg-gradient-to-b from-cyan-500 to-green-500 rounded"></div>
          <div className="absolute inset-0 bg-gray-200 bg-opacity-25 backdrop-filter backdrop-blur-lg rounded"></div>
          <div className="absolute inset-0 flex items-center justify-center rounded">
            <h1 className="text-3xl font-bold text-white">Content</h1>
          </div>
        </div> */}


        {/* <div className="flex flex-col items-center justify-center py-8 border-b-[0.4em] border-emerald-500 rounded shadow-lg relative">
        <div className="absolute inset-0 bg-cover bg-center filter blur-md bg-gradient-to-b from-cyan-500 to-green-500 rounded"></div>
        <div className="absolute inset-0 bg-gray-200 bg-opacity-25 backdrop-filter backdrop-blur-lg rounded"></div>
        <div className="w-full flex flex-col items-center justify-center rounded z-10">
          <div className="text-3xl font-bold mb-2 text-center text-transparent bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text">OG Kush HHC</div>
          <img src="https://legrossisteducbd.fr/wp-content/uploads/2022/12/Fleurs-CBD-Purple-Haze-Glass-House-2.png" alt="John Doe" className="w-40 h-40 object-cover rounded-full mb-2 hover:scale-110 transition duration-300 ease-in-out"/>
          <div className="flex mt-5">
              <button className="bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 text-white font-bold py-2 px-4 rounded shadow-lg text-sm md:text-lg">
                Ajouter au panier
              </button>
              <select className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm ml-2 shadow-lg">
                <option>{exemplePrice.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}</option>
              </select>
          </div>
        </div>
        </div> */}



        
        


      </div>


    </div>
    </main>
  )
}
