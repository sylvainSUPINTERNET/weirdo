import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"

export default function CartModal ({isOpen, onClose, cart}: {onOpen: any, isOpen: any, onClose: any, cart:any}) {
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
                                <div>
                                    <p>{cart[productKey].name}</p>
                                    <p> x {cart[productKey].quantity} </p>

                                </div>
                            ))
                        }

                    </DrawerBody>

  
                    {
                        Object.keys(cart).length === 0 && (
                            <p className='text-center text-2xl md:text-6xl font-bold mt-10'>Votre panier est vide</p>
                        )
                    }
                    
                    <DrawerFooter className="">
            
                    </DrawerFooter>

                </DrawerContent>
            </Drawer>
        </div>
    )
}