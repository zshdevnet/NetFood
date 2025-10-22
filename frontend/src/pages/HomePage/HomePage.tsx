import { Box } from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import HeroSection from "./HeroSection";

const HomePage = () => {
  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      bg="white"
      _dark={{ bg: "#121212" }}
    >
      <Navigation />

      {/* Hero Section */}
      <Box flex="1" py={{ base: 4, md: 8 }}>
        <HeroSection />
      </Box>

      <Footer />
    </Box>
  );
};

export default HomePage;
