import {
  Box,
  VStack,
  Link,
  Text,
  IconButton,
  Flex,
  Image,
} from "@chakra-ui/react";
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

  const handleLogoClick = () => {
    // Close the menu
    onClose();
    // Navigate to home and scroll to top
    window.location.href = "/";
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      {/* Overlay */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="blackAlpha.600"
        zIndex={1500}
        opacity={isOpen ? 1 : 0}
        visibility={isOpen ? "visible" : "hidden"}
        transition="opacity 0.3s ease, visibility 0.3s ease"
        onClick={onClose}
      />

      {/* Drawer */}
      <Box
        position="fixed"
        top={0}
        left={0}
        bottom={0}
        width="280px"
        bg="white"
        zIndex={1600}
        boxShadow="xl"
        transform={isOpen ? "translateX(0)" : "translateX(-100%)"}
        transition="transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        _dark={{ bg: "#121212" }}
      >
        {/* Header */}
        <Flex
          align="center"
          justify="space-between"
          px={6}
          py={4}
          borderBottomWidth="1px"
          borderColor="gray.200"
          _dark={{ borderColor: "whiteAlpha.300" }}
        >
          <Box
            cursor="pointer"
            onClick={handleLogoClick}
            _hover={{ opacity: 0.8 }}
            transition="opacity 0.2s"
          >
            <Image
              src="/logos/netfood.webp"
              alt="NetFood Logo"
              height="80px"
              width="auto"
            />
          </Box>
          <IconButton
            aria-label="Close menu"
            onClick={onClose}
            variant="ghost"
            size="sm"
            color="gray.600"
            _dark={{ color: "#E0E0E0" }}
            _hover={{ color: "#D35400" }}
          >
            <FiX />
          </IconButton>
        </Flex>

        {/* Menu Items */}
        <VStack gap={0} align="stretch">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            const activeColor = colorMode === "light" ? "#3E9A42" : "#D35400";
            const defaultColor = colorMode === "light" ? "gray.700" : "#E0E0E0";

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                display="flex"
                alignItems="center"
                gap={3}
                px={6}
                py={4}
                color={active ? activeColor : defaultColor}
                bg={
                  active
                    ? colorMode === "light"
                      ? "green.50"
                      : "orange.900"
                    : "transparent"
                }
                _hover={{
                  bg: colorMode === "light" ? "gray.50" : "whiteAlpha.100",
                  color: colorMode === "light" ? "#3E9A42" : "#D35400",
                  textDecoration: "none",
                }}
                _active={{
                  bg: colorMode === "light" ? "gray.100" : "whiteAlpha.200",
                }}
                transition="all 0.2s ease"
                borderBottomWidth="1px"
                borderColor="gray.100"
                _last={{ borderBottom: "none" }}
                _dark={{
                  borderColor: "whiteAlpha.100",
                }}
                opacity={isOpen ? 1 : 0}
                transform={isOpen ? "translateX(0)" : "translateX(-20px)"}
                transitionDelay={isOpen ? `${index * 0.05}s` : "0s"}
                style={{
                  transition:
                    "opacity 0.3s ease, transform 0.3s ease, background-color 0.2s ease, color 0.2s ease",
                }}
              >
                <Icon size={20} />
                <Text fontSize="md" fontWeight={active ? "semibold" : "medium"}>
                  {item.label}
                </Text>
              </Link>
            );
          })}
        </VStack>
      </Box>
    </>
  );
};

export default MobileMenuDrawer;
