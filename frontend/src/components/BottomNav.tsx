import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { FiGrid, FiShoppingCart, FiMenu, FiUser } from "react-icons/fi";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import MobileMenuDrawer from "./MobileMenuDrawer";
import type { ReactElement } from "react";

type Item = {
  label: string;
  href?: string;
  icon: (props: { size?: number }) => ReactElement;
  onClick?: () => void;
};

const BottomNav = () => {
  const { colorMode } = useColorMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items: Item[] = [
    {
      label: "Menu",
      icon: (p) => <FiMenu size={p.size ?? 22} />,
      onClick: () => setIsMenuOpen(true),
    },
    {
      label: "Catalog",
      href: "/catalog",
      icon: (p) => <FiGrid size={p.size ?? 22} />,
    },
    {
      label: "Cart",
      href: "/cart",
      icon: (p) => <FiShoppingCart size={p.size ?? 22} />,
    },
    {
      label: "Account",
      href: "/account",
      icon: (p) => <FiUser size={p.size ?? 22} />,
    },
  ];

  const isActive = (href: string) => {
    if (typeof window === "undefined") return false;
    if (href === "/") return window.location.pathname === "/";
    return window.location.pathname.startsWith(href);
  };

  return (
    <>
      <Box
        display={{ base: "block", md: "none" }}
        position="fixed"
        bottom={0}
        left={0}
        right={0}
        bg="white"
        borderTopWidth="1px"
        borderColor="gray.200"
        zIndex={1000}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        _dark={{ bg: "#121212", borderColor: "whiteAlpha.300" }}
      >
        <Flex justify="space-between" align="center" py={2} px={3} w="100%">
          {items.map((item) => {
            const active = item.href ? isActive(item.href) : false;
            const color = active
              ? "#D35400"
              : colorMode === "light"
              ? "gray.700"
              : "#E0E0E0";

            if (item.onClick) {
              return (
                <IconButton
                  key={item.label}
                  aria-label={item.label}
                  onClick={item.onClick}
                  variant="ghost"
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  flex="1"
                  minW={0}
                  gap={1}
                  color={color}
                  _hover={{ color: "#D35400", bg: "transparent" }}
                  _active={{ color: "#D35400", bg: "transparent" }}
                  _focus={{ boxShadow: "none", outline: "none" }}
                  _focusVisible={{ boxShadow: "none", outline: "none" }}
                  height="auto"
                  px={0}
                  py={2}
                >
                  {item.icon({ size: 22 })}
                  <Text fontSize="xs">{item.label}</Text>
                </IconButton>
              );
            }

            return (
              <RouterLink
                key={item.href}
                to={item.href!}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  flex: "1",
                  minWidth: 0,
                  textAlign: "center",
                  color: color,
                  textDecoration: "none",
                  gap: "4px",
                  padding: "8px 0",
                }}
              >
                {item.icon({ size: 22 })}
                <Text fontSize="xs">{item.label}</Text>
              </RouterLink>
            );
          })}
        </Flex>
      </Box>

      <MobileMenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default BottomNav;
