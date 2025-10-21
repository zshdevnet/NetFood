"use client"

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

// Custom NetFood Typography System
const customSystem = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Inter, system-ui, sans-serif" },
        body: { value: "Source Sans Pro, system-ui, sans-serif" },
        accent: { value: "Poppins, system-ui, sans-serif" },
      },
    },
  },
})

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={customSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
