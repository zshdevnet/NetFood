import { Box, Container, Text } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box 
      as="footer"
      bg="transparent"
      color="inherit"
      py={6}
      mt="auto"
      borderTopWidth="1px"
      borderColor="gray.200"
      _dark={{ borderColor: "whiteAlpha.300" }}
    >
  <Container maxW="1450px" px={0} textAlign="center">
        <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>
          © {new Date().getFullYear()} NetFood. All rights reserved.
        </Text>
      </Container>
    </Box>
  )
}

export default Footer