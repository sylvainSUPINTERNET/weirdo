import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"

export default function CartModal ({isOpen, onClose}: {onOpen: any, isOpen: any, onClose: any}) {
    const btnRef = useRef()

    const [cart, setCart] = useState([])

    useEffect( () => {
        const cart = window.localStorage.getItem('cart-weedy')
        console.log(cart);
        if (cart) {
            setCart(JSON.parse(cart))
        }
    }, [])

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

                    <DrawerBody>
                    </DrawerBody>

                    {
                        cart && cart.length > 0 && cart.map((item: any) => <p>{item.quantity}</p>)
                    }

                    {
                        cart.length === 0 && (
                            <p className='text-center text-2xl md:text-6xl font-bold mt-10'>Votre panier est vide</p>
                        )
                    }
                    
                    <DrawerFooter>
                    </DrawerFooter>

                </DrawerContent>
            </Drawer>
        </div>
    )
}