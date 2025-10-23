import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react"

const MapSection = () => {
  return (
    <Box 
      bg="white"
      _dark={{ bg: "#1A1A1A" }}
      py={{ base: 12, md: 16 }}
      mt={16}
    >
      <Container maxW="1200px" px={{ base: 4, md: 6 }}>
        <VStack gap={3} mb={8} textAlign="center">
          <Box
            px={4}
            py={2}
            bg="green.50"
            _dark={{ bg: "green.900/20" }}
            borderRadius="full"
          >
            <Text 
              fontSize="sm"
              fontWeight="600"
              color="#3E9A42"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              Find Us
            </Text>
          </Box>
          <Heading 
            fontSize={{ base: "2xl", md: "4xl" }}
            color="gray.900"
            _dark={{ color: "#FFFFFF" }}
            fontFamily="heading"
            fontWeight="700"
          >
            Visit Our Location
          </Heading>
          <Text 
            fontSize={{ base: "sm", md: "md" }}
            color="gray.600"
            _dark={{ color: "gray.400" }}
            maxW="2xl"
          >
            Come visit us at our wholesale location
          </Text>
        </VStack>

        <Box 
          h={{ base: "400px", md: "500px" }}
          borderRadius="2xl"
          overflow="hidden"
          border="1px solid"
          borderColor="gray.200"
          _dark={{ borderColor: "whiteAlpha.200", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)" }}
          boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
        >
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.3894547899396!2d-77.43242382346192!3d38.88744017171358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDUzJzE0LjgiTiA3N8KwMjUnNDguOCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            title="NetFood Location"
          />
        </Box>
      </Container>
    </Box>
  )
}

export default MapSection
