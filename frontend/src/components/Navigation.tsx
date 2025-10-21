import { Box, Flex, Link, Button, Container, IconButton, Image } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"
import { FiSun, FiMoon } from "react-icons/fi"

const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box 
      bg="white" 
      color="gray.700" 
      py={2}
      position="sticky"
      top={0}
      zIndex={1000}
      borderBottomWidth="1px"
      borderColor="gray.200"
      _dark={{ bg: "#121212", color: "#E0E0E0", borderColor: "whiteAlpha.300" }}
    >
  <Container maxW="1450px" px={0}>
        <Flex justify="space-between" align="center">
          {/* Logo/Brand */}
          <Link 
            href="/" 
            display="flex" 
            alignItems="center" 
            _hover={{ textDecoration: "none" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Image 
              src="/logos/netfood.webp" 
              alt="NetFood Logo" 
              height="48px"
              width="auto"
              cursor="pointer"
              _hover={{ opacity: 0.9 }}
              transition="opacity 0.2s"
            />
          </Link>

          {/* Navigation Links */}
          <Flex gap={6} align="center">
            <Link 
              href="/" 
              color="#3E9A42" 
              _hover={{ textDecoration: "underline", color: "#2D7A32" }}
              _dark={{ color: "#3E9A42" }}
            >
              Home
            </Link>
            <Link 
              href="/catalog" 
              color="#3E9A42" 
              _hover={{ textDecoration: "underline", color: "#2D7A32" }}
              _dark={{ color: "#3E9A42" }}
            >
              Catalog
            </Link>
            <Link 
              href="/about" 
              color="#3E9A42" 
              _hover={{ textDecoration: "underline", color: "#2D7A32" }}
              _dark={{ color: "#3E9A42" }}
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              color="#3E9A42" 
              _hover={{ textDecoration: "underline", color: "#2D7A32" }}
              _dark={{ color: "#3E9A42" }}
            >
              Contact Us
            </Link>
            
            {/* Color Mode Switcher */}
            <IconButton
              aria-label="Toggle color mode"
              onClick={toggleColorMode}
              variant="ghost"
              color="gray.600"
              _hover={{ bg: "gray.100" }}
              _dark={{ 
                color: "#E0E0E0", 
                _hover: { bg: "whiteAlpha.200" } 
              }}
            >
              {colorMode === "light" ? <FiMoon /> : <FiSun />}
            </IconButton>
            
            <Button 
              bg="#D35400"
              color="white"
              size="sm"
              fontFamily="accent"
              fontWeight="semibold"
              _hover={{ bg: "#B8440F" }}
              _dark={{ 
                bg: "#D35400", 
                _hover: { bg: "#E55100" } 
              }}
            >
              Open An Account
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navigation