import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"

export default function CartModal ({isOpen, onClose}: {onOpen: any, isOpen: any, onClose: any}) {
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

                    <DrawerBody>
                    </DrawerBody>

                    {/* TODO */}
                    <p>Exemple</p>
                    
                    <DrawerFooter>
                    </DrawerFooter>

                </DrawerContent>
            </Drawer>
        </div>
    )
}