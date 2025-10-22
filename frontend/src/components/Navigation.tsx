import { Box, Flex, Link, Button, Container, IconButton, Image } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"
import { FiSun, FiMoon } from "react-icons/fi"
import { useLocation } from "react-router-dom"
import BottomNav from "./BottomNav"

const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const location = useLocation()

  const isActive = (href: string) => {
    const path = location.pathname
    if (href === "/") return path === "/"
    return path.startsWith(href)
  }

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
  <Container maxW="1450px" px={{ base: 4, md: 0 }}>
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
              height={{ base: "60px", md: "72px" }}
              width="auto"
              cursor="pointer"
              _hover={{ opacity: 0.9 }}
              transition="opacity 0.2s"
            />
          </Link>

          {/* Navigation Links (hidden on mobile) */}
          <Flex gap={8} align="center">
            <Link 
              href="/catalog" 
              color={isActive("/catalog") ? "#D35400" : (colorMode === "light" ? "#3E9A42" : "white")}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={{ md: "lg" }}
              fontWeight="semibold"
              px={{ md: 2 }}
              py={{ md: 2 }}
              _hover={{ textDecoration: "none", color: "#2D7A32" }}
              _dark={{ _hover: { color: "#D35400", textDecoration: "none" } }}
            >
              Catalog
            </Link>
            <Link 
              href="/about" 
              color={isActive("/about") ? "#D35400" : (colorMode === "light" ? "#3E9A42" : "white")}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={{ md: "lg" }}
              fontWeight="semibold"
              px={{ md: 2 }}
              py={{ md: 2 }}
              _hover={{ textDecoration: "none", color: "#2D7A32" }}
              _dark={{ _hover: { color: "#D35400", textDecoration: "none" } }}
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              color={isActive("/contact") ? "#D35400" : (colorMode === "light" ? "#3E9A42" : "white")}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={{ md: "lg" }}
              fontWeight="semibold"
              px={{ md: 2 }}
              py={{ md: 2 }}
              _hover={{ textDecoration: "none", color: "#2D7A32" }}
              _dark={{ _hover: { color: "#D35400", textDecoration: "none" } }}
            >
              Contact Us
            </Link>
            
            {/* Color Mode Switcher */}
            <IconButton
              aria-label="Toggle color mode"
              onClick={toggleColorMode}
              variant="ghost"
              color="gray.600"
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
              _dark={{ 
                color: "#E0E0E0", 
                _hover: { bg: "transparent", color: "#D35400" },
                _active: { bg: "transparent", color: "#D35400" }
              }}
            >
              {colorMode === "light" ? <FiMoon /> : <FiSun />}
            </IconButton>
            
            <Link href="/open-account" display={{ base: "none", md: "inline-flex" }} _hover={{ textDecoration: "none" }}>
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
            </Link>
          </Flex>
        </Flex>
      </Container>
      {/* Mobile app-style bottom navigation */}
      <BottomNav />
    </Box>
  )
}

export default Navigation
