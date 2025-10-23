import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import FormSection from "./FormSection"
import ContactInformation from "./ContactInformation"
import MapSection from "./MapSection"

const ContactUsPage = () => {
  return (
    <Box 
      minH="100vh" 
      display="flex" 
      flexDirection="column"
      bg="gray.50"
      _dark={{ bg: "#0A0A0A" }}
    >
      <Navigation />
      
      <Box flex="1" py={{ base: 8, md: 16 }} px={0} maxW="1450px" mx="auto" w="100%">
        <Container maxW="1200px" px={{ base: 4, md: 6 }}>
          {/* Page Header */}
          <VStack gap={3} mb={{ base: 10, md: 14 }} textAlign="center">
            <Box
              px={4}
              py={2}
              bg="green.50"
              _dark={{ bg: "green.900/20" }}
              borderRadius="full"
              mb={2}
            >
              <Text 
                fontSize="sm"
                fontWeight="600"
                color="#3E9A42"
                letterSpacing="wide"
                textTransform="uppercase"
              >
                Contact Us
              </Text>
            </Box>
            <Heading 
              fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
              color="gray.900"
              _dark={{ color: "#FFFFFF" }}
              fontFamily="heading"
              fontWeight="700"
              lineHeight="1.2"
              letterSpacing="-0.02em"
            >
              Let's Work Together
            </Heading>
            <Text 
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              maxW="2xl"
              lineHeight="1.7"
            >
              Have questions about our wholesale products? We'd love to hear from you. 
              Fill out the form below and our team will get back to you within 24 hours.
            </Text>
          </VStack>

          {/* Contact Form Section */}
          <FormSection />

          {/* Contact Information & Working Hours Section */}
          <ContactInformation />
        </Container>
      </Box>

      {/* Map Section */}
      <MapSection />
      
      <Footer />
    </Box>
  )
}

export default ContactUsPage
