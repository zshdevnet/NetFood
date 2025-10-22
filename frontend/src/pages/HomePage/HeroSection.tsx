import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Circle,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { apiService } from "../../services/api";
import type { HeroSlider } from "../../services/api";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // New state for API data
  const [slides, setSlides] = useState<HeroSlider[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Background gradient variations for slides
  const backgroundGradients = [
    "linear-gradient(135deg, #2D5A3D 0%, #3E9A42 50%, #4CAF50 100%)",
    "linear-gradient(135deg, #1B4B2A 0%, #2D5A3D 50%, #3E9A42 100%)",
    "linear-gradient(135deg, #0F3A1F 0%, #1B4B2A 50%, #2D5A3D 100%)",
    "linear-gradient(135deg, #2F4F2F 0%, #228B22 50%, #32CD32 100%)",
    "linear-gradient(135deg, #006400 0%, #2E8B57 50%, #3CB371 100%)",
  ];

  // Fetch slides from backend
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await apiService.getHeroSliders();

        if (response.success && response.results.length > 0) {
          // Sort slides by order
          const sortedSlides = response.results.sort(
            (a, b) => a.order - b.order
          );
          setSlides(sortedSlides);
        } else {
          setError("No slides available");
        }
      } catch (err) {
        console.error("Failed to fetch slides:", err);
        setError(
          "Failed to load slides. Please check if the backend is running."
        );

        // Fallback to sample data for development
        setSlides([
          {
            id: 1,
            title: "Fresh Organic Produce",
            subtitle: "Farm to Table Excellence",
            description:
              "Premium quality fruits and vegetables sourced directly from local farms",
            image_url: "/honey.png",
            webp_url: null,
            image_alt: "Fresh Organic Produce",
            order: 1,
            is_active: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  // Reset current slide when slides change
  useEffect(() => {
    if (slides.length > 0 && currentSlide >= slides.length) {
      setCurrentSlide(0);
    }
  }, [slides, currentSlide]);

  // Auto-advance slides
  useEffect(() => {
    if (slides.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  // Add keyboard navigation for PC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isHovered) return; // Only when hovering over slider

      if (e.key === "ArrowLeft") {
        console.log("Left arrow - Previous slide");
        prevSlide();
      } else if (e.key === "ArrowRight") {
        console.log("Right arrow - Next slide");
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isHovered]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Mouse wheel navigation
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault(); // Prevent page scroll

    if (isScrolling) return;

    setIsScrolling(true);

    console.log(`Wheel deltaY: ${e.deltaY}`); // Debug log

    if (e.deltaY > 0) {
      console.log("Wheel down - Next slide");
      nextSlide();
    } else if (e.deltaY < 0) {
      console.log("Wheel up - Previous slide");
      prevSlide();
    }

    // Prevent rapid scrolling
    setTimeout(() => setIsScrolling(false), 1000);
  };

  // Touch navigation for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    const touchDown = e.touches[0].clientX;
    setTouchStart(touchDown);
    setTouchEnd(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchDown = e.touches[0].clientX;
    setTouchEnd(touchDown);

    // Prevent default scrolling behavior during horizontal swipe
    const horizontalDistance = Math.abs(touchDown - touchStart);
    if (horizontalDistance > 10) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50; // Swipe left = next slide
    const isRightSwipe = distance < -50; // Swipe right = previous slide

    console.log(
      `Touch - Start: ${touchStart}, End: ${touchEnd}, Distance: ${distance}`
    );

    if (isLeftSwipe) {
      console.log("Left swipe detected - Next slide");
      nextSlide();
    } else if (isRightSwipe) {
      console.log("Right swipe detected - Previous slide");
      prevSlide();
    }

    // Reset touch values
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Loading state
  if (loading) {
    return (
      <Container maxW="1450px" px={0}>
        <Box
          h={{ base: "400px", md: "500px", lg: "600px" }}
          borderRadius="xl"
          mx={{ base: 4, md: 0 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="gray.100"
        >
          <VStack>
            <Spinner size="xl" color="blue.500" />
            <Text>Loading hero content...</Text>
          </VStack>
        </Box>
      </Container>
    );
  }

  // Error state
  if (error) {
    return (
      <Container maxW="1450px" px={0}>
        <Box
          h={{ base: "400px", md: "500px", lg: "600px" }}
          borderRadius="xl"
          mx={{ base: 4, md: 0 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="red.50"
          border="1px solid"
          borderColor="red.200"
        >
          <VStack>
            <Text color="red.500" fontSize="lg" fontWeight="bold">
              Failed to load hero content
            </Text>
            <Text color="red.400">{error}</Text>
            <Button colorScheme="red" onClick={() => window.location.reload()}>
              Retry
            </Button>
          </VStack>
        </Box>
      </Container>
    );
  }

  // No slides available
  if (slides.length === 0) {
    return (
      <Container maxW="1450px" px={0}>
        <Box
          h={{ base: "400px", md: "500px", lg: "600px" }}
          borderRadius="xl"
          mx={{ base: 4, md: 0 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="gray.50"
          border="1px solid"
          borderColor="gray.200"
        >
          <VStack>
            <Text color="gray.500" fontSize="lg">
              No hero content available
            </Text>
            <Text color="gray.400" fontSize="sm">
              Please add some hero sliders in the admin panel
            </Text>
          </VStack>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxW="1450px" px={0}>
      <Box
        ref={sliderRef}
        position="relative"
        h={{ base: "400px", md: "500px", lg: "600px" }}
        borderRadius="xl"
        overflow="hidden"
        bgImage={backgroundGradients[currentSlide % backgroundGradients.length]}
        mx={{ base: 4, md: 0 }}
        boxShadow="xl"
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        cursor="grab"
        _active={{ cursor: "grabbing" }}
        _hover={{ boxShadow: "2xl" }}
        userSelect="none"
        css={{
          touchAction: "pan-y pinch-zoom",
        }}
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
                    src={slide.webp_url || slide.image_url || ""}
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

export default HeroSection;
