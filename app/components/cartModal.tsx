import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { removeToCart } from "../db/localStorageManager";

export default function CartModal ({isOpen, onClose, cart, setCart}: {onOpen: any, isOpen: any, onClose: any, cart:any, setCart:Function}) {
    const btnRef = useRef()


    return ( 
        <div>
            <Drawer 
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef as any}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    
                    <p className='text-2xl md:text-6xl font-bold border-b-[0.1em] border-emerald-500 ml-4 mt-5'>Panier</p>

                    <DrawerBody className="mt-5 text-2xl">

                        {
                            cart && Object.keys(cart).length > 0 && Object.keys(cart).map((productKey: string) => (
                                <div className="bg-gray-200 shadow-lg rounded-lg p-4 mb-5">
                                    <p className="font-bold">{cart[productKey].name}</p>
                                    <p className="font-semibold mt-2">{cart[productKey].quantity}</p>
                                    <div className="flex justify-center rounded-lg p-2 shadow-md bg-red-600 mt-3">
                                        <button className="text-white" onClick={_e => removeToCart(cart[productKey].name, setCart)}>Supprimer</button>
                                    </div>
                                </div>
                            ))
                        }

                    </DrawerBody>

  
                    {
                        Object.keys(cart).length === 0 && (
                            <p className='text-center text-2xl md:text-4xl font-bold mt-10'>Votre panier est vide</p>
                        )
                    }
                    
                    <DrawerFooter className="">
            
                    </DrawerFooter>

                </DrawerContent>
            </Drawer>
        </div>
    )
}