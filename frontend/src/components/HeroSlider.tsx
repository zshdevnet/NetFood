import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Circle,
  Image,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Fresh Organic Produce",
      subtitle: "Farm to Table Excellence",
      description:
        "Premium quality fruits and vegetables sourced directly from local farms",
      productImage: "/api/placeholder/400/300", // You can replace with actual product images
      bgPattern:
        "linear-gradient(135deg, #2D5A3D 0%, #3E9A42 50%, #4CAF50 100%)",
    },
    {
      id: 2,
      title: "Wholesale Solutions",
      subtitle: "Built for Business",
      description:
        "Competitive pricing and bulk quantities for restaurants and retailers",
      productImage: "/api/placeholder/400/300",
      bgPattern:
        "linear-gradient(135deg, #1B4B2A 0%, #2D5A3D 50%, #3E9A42 100%)",
    },
    {
      id: 3,
      title: "Quality Guaranteed",
      subtitle: "Trust & Reliability",
      description:
        "Certified suppliers and rigorous quality control for every order",
      productImage: "/api/placeholder/400/300",
      bgPattern:
        "linear-gradient(135deg, #0F3A1F 0%, #1B4B2A 50%, #2D5A3D 100%)",
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <Container maxW="1450px" px={0}>
      <Box
        position="relative"
        h={{ base: "400px", md: "500px", lg: "600px" }}
        borderRadius="xl"
        overflow="hidden"
        bg={slides[currentSlide].bgPattern}
        mx={{ base: 4, md: 0 }}
        boxShadow="xl"
      >
        {/* Texture Pattern Overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          w="60%"
          h="100%"
          bgImage="radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)"
          bgSize="30px 30px"
          opacity={0.3}
        />

        {/* Organic Pattern Overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          w="50%"
          h="100%"
          bgImage="repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 20px)"
          opacity={0.15}
        />

        {slides.map((slide, index) => (
          <Box
            key={slide.id}
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            opacity={index === currentSlide ? 1 : 0}
            transform={
              index === currentSlide ? "translateX(0)" : "translateX(20px)"
            }
            transition="all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
            display="flex"
            alignItems="center"
          >
            <Container maxW="1450px" px={{ base: 6, md: 8 }}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                h="100%"
                flexDirection={{ base: "column", lg: "row" }}
                textAlign={{ base: "center", lg: "left" }}
                gap={{ base: 8, lg: 12 }}
              >
                {/* Left Side - Text Content */}
                <VStack
                  gap={{ base: 4, md: 6 }}
                  align={{ base: "center", lg: "flex-start" }}
                  flex="1"
                  maxW={{ base: "100%", lg: "600px" }}
                >
                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    fontWeight="semibold"
                    color="rgba(255,255,255,0.9)"
                    letterSpacing="wider"
                    textTransform="uppercase"
                  >
                    {slide.subtitle}
                  </Text>

                  <Text
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
                    fontWeight="bold"
                    color="white"
                    lineHeight="tight"
                    fontFamily="heading"
                    textShadow="0 2px 4px rgba(0,0,0,0.3)"
                  >
                    {slide.title}
                  </Text>

                  <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    color="rgba(255,255,255,0.95)"
                    lineHeight="relaxed"
                    maxW="500px"
                    fontWeight="medium"
                  >
                    {slide.description}
                  </Text>
                </VStack>

                {/* Right Side - Product Image */}
                <Box
                  flex="1"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  maxW={{ base: "300px", lg: "500px" }}
                >
                  <Image
                    src={slide.productImage}
                    alt={slide.title}
                    w="100%"
                    h="auto"
                    maxH={{ base: "200px", md: "300px", lg: "400px" }}
                    objectFit="contain"
                    filter="drop-shadow(0 10px 20px rgba(0,0,0,0.3))"
                    transform="scale(1)"
                    transition="transform 0.3s ease"
                    _hover={{ transform: "scale(1.05)" }}
                  />
                </Box>
              </Box>
            </Container>
          </Box>
        ))}

        {/* Dot Navigation */}
        <HStack
          position="absolute"
          bottom={6}
          left="50%"
          transform="translateX(-50%)"
          gap={3}
          zIndex={10}
        >
          {slides.map((_, index) => (
            <Circle
              key={index}
              size={{ base: "12px", md: "14px" }}
              bg={index === currentSlide ? "white" : "rgba(255,255,255,0.4)"}
              cursor="pointer"
              onClick={() => goToSlide(index)}
              transition="all 0.3s ease"
              _hover={{
                bg: "white",
                transform: "scale(1.2)",
              }}
              boxShadow={
                index === currentSlide
                  ? "0 0 0 2px rgba(255,255,255,0.5)"
                  : "none"
              }
            />
          ))}
        </HStack>
      </Box>
    </Container>
  );
};

export default HeroSlider;
