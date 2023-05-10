"use client"; // required for app directory project and here for chakraProvider

import './globals.css'
import { ChakraProvider } from "@chakra-ui/react";

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head/>

          <body>
              <ChakraProvider>
                {children}
              </ChakraProvider>
          </body>


    </html>
  )
}

