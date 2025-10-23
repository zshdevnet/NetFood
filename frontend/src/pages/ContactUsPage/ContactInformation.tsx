import { Box, Heading, Text, Grid, VStack, HStack, Link } from "@chakra-ui/react"
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa"

const ContactInformation = () => {
  return (
    <Grid templateColumns={{ base: "1fr", lg: "1fr 1.2fr" }} gap={10}>
      {/* Contact Information */}
      <VStack gap={6} align="stretch">
        <Box>
          <Heading 
            fontSize={{ base: "xl", md: "2xl" }}
            color="gray.800"
            _dark={{ color: "#E0E0E0" }}
            fontWeight="600"
            mb={2}
          >
            Get In Touch
          </Heading>
          <Text fontSize="sm" color="gray.500" _dark={{ color: "gray.400" }}>
            We're here to help with your wholesale needs
          </Text>
        </Box>

        <VStack gap={4} align="stretch">
          {/* Email */}
          <Box 
            p={4}
            bg="white"
            borderRadius="xl"
            border="1px solid"
            borderColor="gray.100"
            _dark={{ bg: "#1A1A1A", borderColor: "whiteAlpha.100" }}
            transition="all 0.3s"
            _hover={{ 
              borderColor: "#3E9A42",
              boxShadow: "0 4px 12px rgba(62, 154, 66, 0.15)",
              transform: "translateY(-2px)"
            }}
          >
            <HStack gap={4}>
              <Box 
                p={3} 
                bg="linear-gradient(135deg, #3E9A42 0%, #2d7a33 100%)"
                borderRadius="lg"
                color="white"
                boxShadow="0 4px 12px rgba(62, 154, 66, 0.2)"
              >
                <FiMail size={20} />
              </Box>
              <Box flex="1">
                <Text fontSize="xs" fontWeight="600" color="gray.500" _dark={{ color: "gray.400" }} mb={1}>
                  EMAIL
                </Text>
                <Link 
                  href="mailto:info@netfood.us" 
                  color="#3E9A42"
                  fontWeight="500"
                  fontSize="sm"
                  _hover={{ color: "#D35400", textDecoration: "underline" }}
                  transition="all 0.2s"
                >
                  info@netfood.us
                </Link>
              </Box>
            </HStack>
          </Box>

          {/* Phone */}
          <Box 
            p={4}
            bg="white"
            _dark={{ bg: "#1A1A1A", borderColor: "whiteAlpha.100" }}
            borderRadius="xl"
            border="1px solid"
            borderColor="gray.100"
            transition="all 0.3s"
            _hover={{ 
              borderColor: "#3E9A42",
              boxShadow: "0 4px 12px rgba(62, 154, 66, 0.15)",
              transform: "translateY(-2px)"
            }}
          >
            <HStack gap={4}>
              <Box 
                p={3} 
                bg="linear-gradient(135deg, #3E9A42 0%, #2d7a33 100%)"
                borderRadius="lg"
                color="white"
                boxShadow="0 4px 12px rgba(62, 154, 66, 0.2)"
              >
                <FiPhone size={20} />
              </Box>
              <Box flex="1">
                <Text fontSize="xs" fontWeight="600" color="gray.500" _dark={{ color: "gray.400" }} mb={1}>
                  PHONE
                </Text>
                <Link 
                  href="tel:+15714498385" 
                  color="#3E9A42"
                  fontWeight="500"
                  fontSize="sm"
                  _hover={{ color: "#D35400", textDecoration: "underline" }}
                  transition="all 0.2s"
                >
                  (571) 449 - 83 85
                </Link>
              </Box>
            </HStack>
          </Box>

          {/* Address */}
          <Box 
            p={4}
            bg="white"
            _dark={{ bg: "#1A1A1A", borderColor: "whiteAlpha.100" }}
            borderRadius="xl"
            border="1px solid"
            borderColor="gray.100"
            transition="all 0.3s"
            _hover={{ 
              borderColor: "#3E9A42",
              boxShadow: "0 4px 12px rgba(62, 154, 66, 0.15)",
              transform: "translateY(-2px)"
            }}
          >
            <HStack gap={4} align="flex-start">
              <Box 
                p={3} 
                bg="linear-gradient(135deg, #3E9A42 0%, #2d7a33 100%)"
                borderRadius="lg"
                color="white"
                boxShadow="0 4px 12px rgba(62, 154, 66, 0.2)"
              >
                <FiMapPin size={20} />
              </Box>
              <Box flex="1">
                <Text fontSize="xs" fontWeight="600" color="gray.500" _dark={{ color: "gray.400" }} mb={1}>
                  ADDRESS
                </Text>
                <Text color="gray.700" _dark={{ color: "gray.300" }} fontSize="sm" lineHeight="1.6">
                  14000 Willard Road Unit G,<br />
                  Chantilly, VA 20151
                </Text>
              </Box>
            </HStack>
          </Box>

          {/* Social Media */}
          <Box 
            mt={2}
            p={4}
            bg="white"
            _dark={{ bg: "#1A1A1A", borderColor: "whiteAlpha.100" }}
            borderRadius="xl"
            border="1px solid"
            borderColor="gray.100"
          >
            <Text fontSize="xs" fontWeight="600" color="gray.500" _dark={{ color: "gray.400" }} mb={3}>
              FOLLOW US
            </Text>
            <HStack gap={3}>
              <Link 
                href="https://wa.me/15551234567" 
                target="_blank"
                rel="noopener noreferrer"
                p={3}
                borderRadius="lg"
                color="gray.700"
                _dark={{ color: "gray.300" }}
                _hover={{ bg: "#3E9A42", color: "white", transform: "translateY(-4px)", boxShadow: "0 8px 16px rgba(62, 154, 66, 0.3)" }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FaWhatsapp size={20} />
              </Link>
              <Link 
                href="https://instagram.com/netfood" 
                target="_blank"
                rel="noopener noreferrer"
                p={3}
                borderRadius="lg"
                color="gray.700"
                _dark={{ color: "gray.300" }}
                _hover={{ bg: "#3E9A42", color: "white", transform: "translateY(-4px)", boxShadow: "0 8px 16px rgba(62, 154, 66, 0.3)" }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FaInstagram size={20} />
              </Link>
              <Link 
                href="https://linkedin.com/company/netfood" 
                target="_blank"
                rel="noopener noreferrer"
                p={3}
                borderRadius="lg"
                color="gray.700"
                _dark={{ color: "gray.300" }}
                _hover={{ bg: "#3E9A42", color: "white", transform: "translateY(-4px)", boxShadow: "0 8px 16px rgba(62, 154, 66, 0.3)" }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FaLinkedin size={20} />
              </Link>
            </HStack>
          </Box>
        </VStack>
      </VStack>

      {/* Working Hours */}
      <Box>
        <Box
          p={6}
          bg="white"
          borderRadius="2xl"
          border="1px solid"
          borderColor="gray.100"
          boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
          _dark={{ bg: "#1A1A1A", borderColor: "whiteAlpha.100", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)" }}
          h="100%"
        >
          <Box mb={6}>
            <Heading 
              fontSize={{ base: "xl", md: "2xl" }}
              color="gray.800"
              _dark={{ color: "#E0E0E0" }}
              fontWeight="600"
              mb={2}
            >
              Working Hours
            </Heading>
            <Text fontSize="sm" color="gray.500" _dark={{ color: "gray.400" }}>
              Visit us during our business hours
            </Text>
          </Box>

          <VStack gap={4} align="stretch">
            {/* Monday - Friday */}
            <Box 
              p={4}
              bg="gray.50"
              _dark={{ bg: "#0F0F0F" }}
              borderRadius="xl"
              borderLeft="4px solid"
              borderColor="#3E9A42"
            >
              <HStack justify="space-between" mb={1}>
                <Text fontWeight="600" color="gray.700" _dark={{ color: "gray.300" }} fontSize="sm">
                  Monday - Friday
                </Text>
                <Box 
                  px={2} 
                  py={1} 
                  bg="green.100" 
                  _dark={{ bg: "green.900/30" }}
                  borderRadius="md"
                >
                  <Text fontSize="xs" fontWeight="700" color="#3E9A42">
                    OPEN
                  </Text>
                </Box>
              </HStack>
              <Text color="gray.600" _dark={{ color: "gray.400" }} fontSize="sm">
                9:00 AM - 6:00 PM
              </Text>
            </Box>

            {/* Saturday */}
            <Box 
              p={4}
              bg="gray.50"
              _dark={{ bg: "#0F0F0F" }}
              borderRadius="xl"
              borderLeft="4px solid"
              borderColor="#3E9A42"
            >
              <HStack justify="space-between" mb={1}>
                <Text fontWeight="600" color="gray.700" _dark={{ color: "gray.300" }} fontSize="sm">
                  Saturday
                </Text>
                <Box 
                  px={2} 
                  py={1} 
                  bg="green.100" 
                  _dark={{ bg: "green.900/30" }}
                  borderRadius="md"
                >
                  <Text fontSize="xs" fontWeight="700" color="#3E9A42">
                    OPEN
                  </Text>
                </Box>
              </HStack>
              <Text color="gray.600" _dark={{ color: "gray.400" }} fontSize="sm">
                10:00 AM - 4:00 PM
              </Text>
            </Box>

            {/* Sunday */}
            <Box 
              p={4}
              bg="gray.50"
              _dark={{ bg: "#0F0F0F", borderColor: "whiteAlpha.300" }}
              borderRadius="xl"
              borderLeft="4px solid"
              borderColor="gray.300"
            >
              <HStack justify="space-between" mb={1}>
                <Text fontWeight="600" color="gray.700" _dark={{ color: "gray.300" }} fontSize="sm">
                  Sunday
                </Text>
                <Box 
                  px={2} 
                  py={1} 
                  bg="gray.200" 
                  _dark={{ bg: "whiteAlpha.200" }}
                  borderRadius="md"
                >
                  <Text fontSize="xs" fontWeight="700" color="gray.600" _dark={{ color: "gray.400" }}>
                    CLOSED
                  </Text>
                </Box>
              </HStack>
              <Text color="gray.500" _dark={{ color: "gray.500" }} fontSize="sm">
                Closed
              </Text>
            </Box>

            {/* Note */}
            <Box 
              mt={2}
              p={4}
              bg="orange.50"
              _dark={{ bg: "orange.900/20", borderColor: "orange.800/50" }}
              borderRadius="xl"
              border="1px solid"
              borderColor="orange.200"
            >
              <Text fontSize="xs" color="gray.700" _dark={{ color: "gray.300" }} lineHeight="1.6">
                <Text as="span" fontWeight="700" color="#D35400">
                  Note:
                </Text>{" "}
                Hours may vary during holidays. Please call ahead to confirm availability.
              </Text>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Grid>
  )
}

export default ContactInformation
