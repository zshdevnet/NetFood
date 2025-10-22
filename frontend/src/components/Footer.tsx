import { Box, Container, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="white"
      color="inherit"
      py={{ base: 3, md: 6 }}
      pb={{ base: 8, md: 6 }}
      mt="auto"
      borderTopWidth="1px"
      borderColor="gray.200"
      position={{ base: "sticky", md: "static" }}
      bottom={{ base: "60px", md: "auto" }}
      zIndex={{ base: 999, md: "auto" }}
      _dark={{
        borderColor: "whiteAlpha.300",
        bg: "#121212",
      }}
    >
      <Container maxW="1450px" px={0} textAlign="center">
        <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>
          © {new Date().getFullYear()} NetFood. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
