import { Box, Text } from "@chakra-ui/react"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"

const ContactUsPage = () => {
  return (
    <Box 
      minH="100vh" 
      display="flex" 
      flexDirection="column"
      bg="white"
      _dark={{ bg: "#121212" }}
    >
      <Navigation />
      
      <Box flex="1" py={0} px={0} maxW="1450px" mx="auto">
        <Text 
          fontSize="5xl" 
          textAlign="center"
          color="gray.800"
          _dark={{ color: "#E0E0E0" }}
          fontFamily="heading"
          fontWeight="bold"
          letterSpacing="tight"
          mb={6}
        >
          Hello, this is ContactUsPage
        </Text>
        
        <Text 
          fontSize="xl" 
          textAlign="center"
          color="gray.600"
          _dark={{ color: "gray.300" }}
          fontFamily="body"
          maxW="5xl"
          mx="auto"
        >
          Get in touch with our wholesale team
        </Text>
      </Box>
      
      <Footer />
    </Box>
  )
}

export default ContactUsPage
