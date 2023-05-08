import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"
import { useCartStorePersist } from "../store/cart";

export default function CartModal ({isOpen, onClose}: {onOpen: any, isOpen: any, onClose: any}) {
    const btnRef = useRef()

    const cartState:any = useCartStorePersist();

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

                    {/* TODO */}
                    {
                        cartState && cartState.cart && cartState.cart.length > 0 && <div> { JSON.stringify(cartState.cart[0]) } </div>
                    }

                    <DrawerFooter>
                    </DrawerFooter>

                </DrawerContent>
            </Drawer>
        </div>
    )
}