import { Box, Flex, Link, Text } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"
import { FiGrid, FiShoppingCart, FiHeart, FiUser } from "react-icons/fi"
import type { ReactElement } from "react"

type Item = {
  label: string
  href: string
  icon: (props: { size?: number }) => ReactElement
}

const items: Item[] = [
    { label: "Favorites", href: "/favorites", icon: (p) => <FiHeart size={p.size ?? 22} /> },
  { label: "Catalog", href: "/catalog", icon: (p) => <FiGrid size={p.size ?? 22} /> },
  { label: "Cart", href: "/cart", icon: (p) => <FiShoppingCart size={p.size ?? 22} /> },
  { label: "Account", href: "/account", icon: (p) => <FiUser size={p.size ?? 22} /> },
]

const isActive = (href: string) => {
  if (typeof window === "undefined") return false
  if (href === "/") return window.location.pathname === "/"
  return window.location.pathname.startsWith(href)
}

const BottomNav = () => {
  const { colorMode } = useColorMode()

  return (
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
          const active = isActive(item.href)
          const color = active ? "#D35400" : (colorMode === "light" ? "gray.700" : "#E0E0E0")
          return (
            <Link
              key={item.href}
              href={item.href}
              display="flex"
              alignItems="center"
              flexDirection="column"
              flex="1"
              minW={0}
              textAlign="center"
              gap={1}
              color={color}
              _hover={{ color: "#D35400", textDecoration: "none" }}
              _active={{ color: "#D35400" }}
              _focus={{ boxShadow: "none", outline: "none" }}
              _focusVisible={{ boxShadow: "none", outline: "none" }}
            >
              {item.icon({ size: 22 })}
              <Text fontSize="xs">{item.label}</Text>
            </Link>
          )
        })}
      </Flex>
    </Box>
  )
}

export default BottomNav
