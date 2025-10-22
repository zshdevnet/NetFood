import { Box, VStack, Text, IconButton, Flex, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useColorMode } from "@/components/ui/color-mode";
import { FiGrid, FiUsers, FiBriefcase, FiMail, FiX } from "react-icons/fi";

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenuDrawer = ({ isOpen, onClose }: MobileMenuDrawerProps) => {
  const { colorMode } = useColorMode();

  const menuItems = [
    { label: "Catalog", href: "/catalog", icon: FiGrid },
    { label: "About Us", href: "/about", icon: FiUsers },
    { label: "Careers", href: "/careers", icon: FiBriefcase },
    { label: "Contact Us", href: "/contact", icon: FiMail },
  ];

  const isActive = (href: string) => {
    if (typeof window === "undefined") return false;
    if (href === "/") return window.location.pathname === "/";
    return window.location.pathname.startsWith(href);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="blackAlpha.600"
        zIndex={1999}
        onClick={onClose}
        display={{ base: "block", md: "none" }}
      />

      {/* Drawer */}
      <Box
        position="fixed"
        top={0}
        left={0}
        h="100vh"
        w="280px"
        bg="white"
        zIndex={2000}
        display={{ base: "block", md: "none" }}
        transform={isOpen ? "translateX(0)" : "translateX(-100%)"}
        transition="transform 0.3s ease"
        overflowY="auto"
        boxShadow="xl"
        _dark={{ bg: "#1a1a1a" }}
      >
        {/* Header */}
        <Flex
          justify="space-between"
          align="center"
          p={6}
          borderBottomWidth="1px"
          borderColor="gray.200"
          _dark={{ borderColor: "whiteAlpha.300" }}
        >
          <RouterLink to="/" onClick={onClose}>
            <Image
              src="/logos/netfood.webp"
              alt="NetFood Logo"
              height="48px"
              width="auto"
            />
          </RouterLink>

          <IconButton
            aria-label="Close menu"
            onClick={onClose}
            variant="ghost"
            color="gray.600"
            _hover={{ bg: "gray.100" }}
            _dark={{
              color: "#E0E0E0",
              _hover: { bg: "whiteAlpha.100" },
            }}
          >
            <FiX size={20} />
          </IconButton>
        </Flex>

        {/* Menu Items */}
        <VStack gap={0} align="stretch">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            const activeColor = colorMode === "light" ? "#3E9A42" : "#D35400";
            const defaultColor = colorMode === "light" ? "gray.700" : "#E0E0E0";
            const activeBg = colorMode === "light" ? "#E8F5E8" : "#2D1B10";

            return (
              <RouterLink
                key={item.href}
                to={item.href}
                onClick={onClose}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "16px 24px",
                  color: active ? activeColor : defaultColor,
                  backgroundColor: active ? activeBg : "transparent",
                  textDecoration: "none",
                  borderBottom: "1px solid",
                  borderColor:
                    colorMode === "light"
                      ? "#E2E8F0"
                      : "rgba(255, 255, 255, 0.1)",
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                  transition: "all 0.3s ease",
                  transitionDelay: `${index * 0.05}s`,
                }}
              >
                <Icon size={20} />
                <Text fontSize="md" fontWeight={active ? "semibold" : "medium"}>
                  {item.label}
                </Text>
              </RouterLink>
            );
          })}
        </VStack>
      </Box>
    </>
  );
};

export default MobileMenuDrawer;
