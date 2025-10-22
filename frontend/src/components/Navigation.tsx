import {
  Box,
  Flex,
  Button,
  Container,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { FiSun, FiMoon, FiShoppingCart } from "react-icons/fi";
import { useLocation, Link as RouterLink } from "react-router-dom";
import BottomNav from "./BottomNav";

const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();

  const isActive = (href: string) => {
    const path = location.pathname;
    if (href === "/") return path === "/";
    return path.startsWith(href);
  };

  const linkStyle = (path: string) => ({
    color: isActive(path)
      ? "#D35400"
      : colorMode === "light"
      ? "#3E9A42"
      : "white",
    fontSize: "1.125rem",
    fontWeight: "600",
    padding: "8px",
    textDecoration: "none",
    display: "inline-flex",
  });

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
          <RouterLink
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
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
          </RouterLink>

          {/* Navigation Links (hidden on mobile) */}
          <Flex gap={8} align="center">
            <Box
              display={{ base: "none", md: "flex" }}
              gap={6}
              alignItems="center"
            >
              <RouterLink to="/catalog" style={linkStyle("/catalog")}>
                Catalog
              </RouterLink>
              <RouterLink to="/about" style={linkStyle("/about")}>
                About Us
              </RouterLink>
              <RouterLink to="/careers" style={linkStyle("/careers")}>
                Careers
              </RouterLink>
              <RouterLink to="/contact" style={linkStyle("/contact")}>
                Contact Us
              </RouterLink>
            </Box>

            {/* Cart and Color Mode Icons */}
            <Flex gap={2} align="center">
              {/* Cart Icon */}
              <RouterLink to="/cart" style={{ textDecoration: "none" }}>
                <IconButton
                  aria-label="Shopping cart"
                  variant="ghost"
                  color="gray.600"
                  display={{ base: "none", md: "inline-flex" }}
                  _hover={{ bg: "transparent", color: "#D35400" }}
                  _active={{ bg: "transparent" }}
                  _dark={{
                    color: "#E0E0E0",
                    _hover: { bg: "transparent", color: "#D35400" },
                    _active: { bg: "transparent", color: "#D35400" },
                  }}
                >
                  <FiShoppingCart />
                </IconButton>
              </RouterLink>

              {/* Color Mode Switcher */}
              <IconButton
                aria-label="Toggle color mode"
                onClick={toggleColorMode}
                variant="ghost"
                color="gray.600"
                _hover={{ bg: "transparent", color: "#D35400" }}
                _active={{ bg: "transparent" }}
                _dark={{
                  color: "#E0E0E0",
                  _hover: { bg: "transparent", color: "#D35400" },
                  _active: { bg: "transparent", color: "#D35400" },
                }}
              >
                {colorMode === "light" ? <FiMoon /> : <FiSun />}
              </IconButton>
            </Flex>

            <Box display={{ base: "none", md: "inline-flex" }}>
              <RouterLink
                to="/account"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button
                  bg="#D35400"
                  color="white"
                  size="sm"
                  fontFamily="accent"
                  fontWeight="semibold"
                  _hover={{ bg: "#B8440F" }}
                  _dark={{
                    bg: "#D35400",
                    _hover: { bg: "#E55100" },
                  }}
                >
                  Account
                </Button>
              </RouterLink>
            </Box>
          </Flex>
        </Flex>
      </Container>
      {/* Mobile app-style bottom navigation */}
      <BottomNav />
    </Box>
  );
};

export default Navigation;
