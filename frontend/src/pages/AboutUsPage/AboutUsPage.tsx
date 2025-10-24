import {
  Box,
  Text,
  Container,
  VStack,
  HStack,
  Grid,
  GridItem,
  Icon,
  Circle,
} from "@chakra-ui/react";
import {
  FiTarget,
  FiUsers,
  FiTrendingUp,
  FiHeart,
  FiShield,
  FiZap,
  FiStar,
} from "react-icons/fi";
import { useColorMode } from "@/components/ui/color-mode";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

const AboutUsPage = () => {
  const { colorMode } = useColorMode();

  const bgGradient =
    colorMode === "light"
      ? "linear-gradient(135deg, #FFF5E6 0%, #FFEBCC 50%, #FFE0B3 100%)"
      : "linear-gradient(135deg, #1A202C 0%, #2D3748 50%, #2C1810 100%)";

  const cardBg = colorMode === "light" ? "white" : "#2D3748";
  const textColor = colorMode === "light" ? "#4A5568" : "#E2E8F0";
  const headingColor = colorMode === "light" ? "#1A202C" : "#F7FAFC";
  const accentColor = colorMode === "light" ? "#3E9A42" : "#D35400";

  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      bg="white"
      _dark={{ bg: "#121212" }}
    >
      <Navigation />

      {/* Breadcrumb */}
      <Container maxW="1450px">
        <Breadcrumb items={[{ label: "About Us", isCurrentPage: true }]} />
      </Container>

      {/* Hero Section */}
      <Box
        background={bgGradient}
        py={{ base: 16, md: 24, lg: 32 }}
        position="relative"
        overflow="hidden"
      >
        {/* Decorative circles */}
        <Circle
          size="300px"
          bg="whiteAlpha.100"
          position="absolute"
          top="-100px"
          right="-100px"
          display={{ base: "none", lg: "block" }}
        />
        <Circle
          size="200px"
          bg="whiteAlpha.50"
          position="absolute"
          bottom="-50px"
          left="-50px"
          display={{ base: "none", md: "block" }}
        />

        <Container maxW="1200px" position="relative" zIndex={1}>
          <VStack gap={8} textAlign="center">
            <VStack gap={4}>
              <Text
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                color={headingColor}
                fontFamily="heading"
                letterSpacing="tight"
                lineHeight={1.1}
              >
                About{" "}
                <Text as="span" color={accentColor}>
                  NetFood
                </Text>
              </Text>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                color={textColor}
                maxW="3xl"
                fontFamily="body"
                lineHeight={1.6}
              >
                Your trusted wholesale grocery partner in the DMV area since
                2016
              </Text>
            </VStack>

            {/* Stats Row */}
            <HStack
              gap={{ base: 6, md: 12 }}
              flexWrap="wrap"
              justify="center"
              pt={8}
            >
              <VStack gap={2}>
                <Text fontSize="3xl" fontWeight="bold" color={accentColor}>
                  9+
                </Text>
                <Text fontSize="sm" color={textColor} textAlign="center">
                  Years of Excellence
                </Text>
              </VStack>
              <VStack gap={2}>
                <Text fontSize="3xl" fontWeight="bold" color={accentColor}>
                  1000+
                </Text>
                <Text fontSize="sm" color={textColor} textAlign="center">
                  Product Items
                </Text>
              </VStack>
              <VStack gap={2}>
                <Text fontSize="3xl" fontWeight="bold" color={accentColor}>
                  DMV
                </Text>
                <Text fontSize="sm" color={textColor} textAlign="center">
                  Area Coverage
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="1200px" py={{ base: 16, md: 20, lg: 24 }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr" }}
          gap={{ base: 12, md: 16, lg: 20 }}
        >
          {/* Our Story Section */}
          <GridItem>
            <Box
              bg={cardBg}
              p={{ base: 8, md: 10, lg: 12 }}
              borderRadius="2xl"
              boxShadow="xl"
              border="1px solid"
              borderColor="gray.100"
              _dark={{ borderColor: "gray.700" }}
              position="relative"
              overflow="hidden"
            >
              {/* Decorative gradient overlay */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                h="4px"
                background={colorMode === "light" ? "#3E9A42" : "#E55100"}
              />

              <VStack gap={6} align="start">
                <HStack gap={4}>
                  <Circle
                    size="60px"
                    bg={{ base: "#3E9A42", _dark: "#E55100" }}
                    _dark={{ bg: "#E55100" }}
                  >
                    <Icon as={FiTrendingUp} w={6} h={6} color="white" />
                  </Circle>
                  <VStack align="start" gap={1}>
                    <Text
                      fontSize={{ base: "2xl", md: "3xl" }}
                      fontWeight="bold"
                      color={headingColor}
                      fontFamily="heading"
                    >
                      Our Story
                    </Text>
                    <Text fontSize="sm" color={accentColor} fontWeight="medium">
                      Founded in 2016
                    </Text>
                  </VStack>
                </HStack>

                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color={textColor}
                  lineHeight={1.8}
                  fontFamily="body"
                >
                  Founded in 2016, Netf Food Inc has grown to become a leading
                  wholesale grocery supplier in the DMV area. Our journey began
                  with a simple goal: to provide a diverse selection of
                  high-quality grocery products while delivering exceptional
                  customer service. Over the years, we've expanded our product
                  range to include over 1,000 items, catering to the evolving
                  needs of our clients. Our commitment to excellence and
                  innovation in the grocery wholesale sector has made us a
                  trusted partner for businesses across the region.
                </Text>
              </VStack>
            </Box>
          </GridItem>

          {/* Our Mission Section */}
          <GridItem>
            <Box
              bg={cardBg}
              p={{ base: 8, md: 10, lg: 12 }}
              borderRadius="2xl"
              boxShadow="xl"
              border="1px solid"
              borderColor="gray.100"
              _dark={{ borderColor: "gray.700" }}
              position="relative"
              overflow="hidden"
            >
              {/* Decorative gradient overlay */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                h="4px"
                background={colorMode === "light" ? "#3E9A42" : "#E55100"}
              />

              <VStack gap={6} align="start">
                <HStack gap={4}>
                  <Circle
                    size="60px"
                    bg={{ base: "#3E9A42", _dark: "#E55100" }}
                    _dark={{ bg: "#E55100" }}
                  >
                    <Icon as={FiTarget} w={6} h={6} color="white" />
                  </Circle>
                  <VStack align="start" gap={1}>
                    <Text
                      fontSize={{ base: "2xl", md: "3xl" }}
                      fontWeight="bold"
                      color={headingColor}
                      fontFamily="heading"
                    >
                      Our Mission
                    </Text>
                    <Text fontSize="sm" color={accentColor} fontWeight="medium">
                      Excellence in Service
                    </Text>
                  </VStack>
                </HStack>

                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color={textColor}
                  lineHeight={1.8}
                  fontFamily="body"
                >
                  At Netf Food Inc, our mission is to enhance the grocery supply
                  chain by offering an extensive range of products with
                  unparalleled customer service. We strive to build lasting
                  relationships with our clients through reliable, efficient,
                  and personalized service. Our aim is to simplify the ordering
                  process, whether in-person or online, and ensure that our
                  delivery and pickup services meet the highest standards of
                  convenience and satisfaction. We are dedicated to supporting
                  our clients' success by providing quality products and
                  exceptional support every step of the way.
                </Text>
              </VStack>
            </Box>
          </GridItem>

          {/* Our Team Section */}
          <GridItem>
            <Box
              bg={cardBg}
              p={{ base: 8, md: 10, lg: 12 }}
              borderRadius="2xl"
              boxShadow="xl"
              border="1px solid"
              borderColor="gray.100"
              _dark={{ borderColor: "gray.700" }}
              position="relative"
              overflow="hidden"
            >
              {/* Decorative gradient overlay */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                h="4px"
                background={colorMode === "light" ? "#3E9A42" : "#E55100"}
              />

              <VStack gap={6} align="start">
                <HStack gap={4}>
                  <Circle
                    size="60px"
                    bg={{ base: "#3E9A42", _dark: "#E55100" }}
                    _dark={{ bg: "#E55100" }}
                  >
                    <Icon as={FiUsers} w={6} h={6} color="white" />
                  </Circle>
                  <VStack align="start" gap={1}>
                    <Text
                      fontSize={{ base: "2xl", md: "3xl" }}
                      fontWeight="bold"
                      color={headingColor}
                      fontFamily="heading"
                    >
                      Our Team
                    </Text>
                    <Text fontSize="sm" color={accentColor} fontWeight="medium">
                      Dedicated Professionals
                    </Text>
                  </VStack>
                </HStack>

                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color={textColor}
                  lineHeight={1.8}
                  fontFamily="body"
                >
                  Our team at Netf Food Inc is the backbone of our success.
                  Comprised of dedicated professionals with extensive experience
                  in the grocery wholesale industry, we are committed to
                  delivering excellence. Each member of our team brings unique
                  skills and expertise, from product knowledge to logistics
                  management. Our customer service representatives are trained
                  to provide personalized support, ensuring every interaction is
                  positive and productive. We work collaboratively to uphold our
                  values of integrity, reliability, and responsiveness, making
                  sure that our clients receive the best service possible.
                </Text>
              </VStack>
            </Box>
          </GridItem>
        </Grid>

        {/* Values Section */}
        <Box mt={{ base: 16, md: 20, lg: 24 }}>
          <VStack gap={8} mb={12}>
            <Text
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              color={headingColor}
              textAlign="center"
              fontFamily="heading"
            >
              Our Core Values
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color={textColor}
              textAlign="center"
              maxW="3xl"
              fontFamily="body"
            >
              The principles that guide everything we do
            </Text>
          </VStack>

          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={6}
          >
            {[
              {
                icon: FiHeart,
                title: "Integrity",
                desc: "Honest and transparent business practices",
              },
              {
                icon: FiShield,
                title: "Reliability",
                desc: "Consistent quality and on-time delivery",
              },
              {
                icon: FiZap,
                title: "Innovation",
                desc: "Embracing new technologies and methods",
              },
              {
                icon: FiStar,
                title: "Excellence",
                desc: "Striving for the highest standards",
              },
            ].map((value, index) => (
              <Box
                key={index}
                bg={cardBg}
                p={6}
                borderRadius="xl"
                textAlign="center"
                border="1px solid"
                borderColor="gray.100"
                _dark={{ borderColor: "gray.700" }}
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "2xl",
                  borderColor: "#D35400",
                }}
              >
                <Circle
                  size="60px"
                  bg={{ base: "#3E9A42", _dark: "#E55100" }}
                  _dark={{ bg: "#E55100" }}
                  mx="auto"
                  mb={4}
                >
                  <Icon as={value.icon} w={6} h={6} color="white" />
                </Circle>
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  color={headingColor}
                  mb={2}
                  fontFamily="heading"
                >
                  {value.title}
                </Text>
                <Text fontSize="sm" color={textColor} fontFamily="body">
                  {value.desc}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default AboutUsPage;
