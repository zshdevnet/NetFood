import { Container, Text } from "@chakra-ui/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const JobOpportunities = () => {
  return (
    <>
      <Navigation />
      <Container
        maxW="1450px"
        py={8}
        minH="calc(100vh - 200px)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="2xl" fontWeight="semibold">
          Hello world
        </Text>
      </Container>
      <Footer />
    </>
  );
};

export default JobOpportunities;
