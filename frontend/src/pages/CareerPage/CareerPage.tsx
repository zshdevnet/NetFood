import {
  Container,
  Text,
  VStack,
  HStack,
  Box,
  Button,
  Badge,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FiMapPin, FiClock } from "react-icons/fi";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

interface JobPosition {
  id: number;
  title: string;
  slug: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  salary?: string;
}

const jobPositions: JobPosition[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    slug: "senior-frontend-developer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    salary: "$120k - $150k",
    description:
      "Join our engineering team to build the future of food delivery technology. You'll work on cutting-edge web applications that serve millions of users worldwide.",
    responsibilities: [
      "Develop and maintain user-facing web applications using React, TypeScript, and modern frontend technologies",
      "Collaborate with designers to implement pixel-perfect UI/UX designs",
      "Optimize applications for maximum speed and scalability",
      "Write clean, maintainable, and well-tested code",
      "Mentor junior developers and contribute to technical decisions",
    ],
    requirements: [
      "5+ years of experience in frontend development",
      "Expert knowledge of React, TypeScript, and modern JavaScript",
      "Experience with state management libraries (Redux, Zustand, etc.)",
      "Strong understanding of responsive design and cross-browser compatibility",
      "Experience with testing frameworks (Jest, Cypress, etc.)",
      "Excellent communication and teamwork skills",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "Flexible working hours and remote work options",
      "Professional development budget",
      "Free meals and snacks",
      "Modern office with great team culture",
    ],
  },
  {
    id: 2,
    title: "Product Marketing Manager",
    slug: "product-marketing-manager",
    department: "Marketing",
    location: "New York / Remote",
    type: "Full-time",
    salary: "$90k - $120k",
    description:
      "Drive product adoption and growth through strategic marketing initiatives. You'll be responsible for positioning NetFood as the leading food delivery platform.",
    responsibilities: [
      "Develop and execute go-to-market strategies for new product features",
      "Create compelling product messaging and positioning",
      "Collaborate with product and engineering teams on feature launches",
      "Analyze market trends and competitor activities",
      "Manage product marketing campaigns across multiple channels",
    ],
    requirements: [
      "3+ years of product marketing experience, preferably in tech/SaaS",
      "Strong analytical skills and data-driven mindset",
      "Excellent written and verbal communication skills",
      "Experience with marketing automation tools and analytics platforms",
      "Bachelor's degree in Marketing, Business, or related field",
      "Experience in food tech or delivery industry is a plus",
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Health and wellness benefits",
      "Flexible PTO and work-from-home options",
      "Marketing conference and training budget",
      "Stock options in a growing company",
      "Team lunch stipends and company events",
    ],
  },
  {
    id: 3,
    title: "Customer Success Specialist",
    slug: "customer-success-specialist",
    department: "Customer Support",
    location: "Austin / Hybrid",
    type: "Full-time",
    salary: "$55k - $70k",
    description:
      "Be the voice of our customers and help them succeed with NetFood. You'll ensure customer satisfaction and drive retention through exceptional service.",
    responsibilities: [
      "Provide exceptional customer support via chat, email, and phone",
      "Troubleshoot technical issues and coordinate with engineering team",
      "Onboard new restaurant partners and guide them through the platform",
      "Analyze customer feedback and identify improvement opportunities",
      "Create and maintain customer support documentation and FAQs",
    ],
    requirements: [
      "2+ years of customer service or support experience",
      "Excellent problem-solving and communication skills",
      "Experience with support ticketing systems (Zendesk, Intercom, etc.)",
      "Ability to work in a fast-paced environment",
      "Empathy and patience when dealing with frustrated customers",
      "Basic technical understanding to troubleshoot common issues",
    ],
    benefits: [
      "Competitive salary with quarterly bonuses",
      "Comprehensive health insurance",
      "Professional development opportunities",
      "Flexible schedule and hybrid work options",
      "Employee discount on food orders",
      "Supportive team environment with growth potential",
    ],
  },
];

const CareerPage = () => {
  const navigate = useNavigate();

  const handleJobClick = (job: JobPosition) => {
    navigate(`/careers/${job.slug}`);
  };

  return (
    <>
      <Navigation />

      {/* Breadcrumb */}
      <Container maxW="1450px">
        <Breadcrumb items={[{ label: "Careers", isCurrentPage: true }]} />
      </Container>

      {/* Job Listings */}
      <Container maxW="1450px" py={{ base: 12, md: 16 }}>
        <VStack gap={8} align="stretch">
          <VStack gap={4} textAlign="center">
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              color={{ base: "#1A202C", _dark: "#F7FAFC" }}
            >
              Open Positions
            </Heading>
            <Text
              fontSize="lg"
              color={{ base: "#2D3748", _dark: "#E2E8F0" }}
              maxW="600px"
            >
              We're always looking for talented individuals to join our growing
              team. Explore our current openings and find your perfect role.
            </Text>
          </VStack>

          <VStack gap={6} mt={8} align="stretch">
            {jobPositions.map((job) => (
              <Box
                key={job.id}
                bg={{ base: "white", _dark: "#23262F" }}
                color={{ base: "inherit", _dark: "white" }}
                borderRadius="xl"
                boxShadow="lg"
                p={6}
                border="1px"
                borderColor="gray.100"
                transition="all 0.3s ease"
                cursor="pointer"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "xl",
                  borderColor: "#D35400",
                }}
                onClick={() => handleJobClick(job)}
              >
                <VStack align="stretch" gap={4}>
                  <VStack align="start" gap={2}>
                    <HStack justify="space-between" w="full" flexWrap="wrap">
                      <Badge
                        bg={{ base: "#3E9A42", _dark: "#E55100" }}
                        color="white"
                        px={3}
                        py={1}
                        borderRadius="md"
                        fontWeight="500"
                      >
                        {job.department}
                      </Badge>
                      {job.salary && (
                        <Text
                          fontSize="sm"
                          fontWeight="semibold"
                          color={{ base: "#3E9A42", _dark: "#E55100" }}
                        >
                          {job.salary}
                        </Text>
                      )}
                    </HStack>
                    <Heading
                      fontSize="xl"
                      color={{ base: "gray.800", _dark: "white" }}
                    >
                      {job.title}
                    </Heading>
                  </VStack>

                  <HStack
                    gap={6}
                    color={{ base: "gray.600", _dark: "white" }}
                    fontSize="sm"
                    flexWrap="wrap"
                  >
                    <HStack gap={1}>
                      <Icon as={FiMapPin} />
                      <Text>{job.location}</Text>
                    </HStack>
                    <HStack gap={1}>
                      <Icon as={FiClock} />
                      <Text>{job.type}</Text>
                    </HStack>
                  </HStack>

                  <Text
                    color={{ base: "gray.600", _dark: "white" }}
                    overflow="hidden"
                    display="-webkit-box"
                    style={{
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {job.description}
                  </Text>

                  <Button
                    bg={{ base: "#3E9A42", _dark: "#E55100" }}
                    color="white"
                    size="md"
                    alignSelf="flex-start"
                    borderRadius="md"
                    fontWeight="600"
                    _hover={{
                      bg: { base: "#338236", _dark: "#C14000" },
                      transform: "scale(1.05)",
                    }}
                  >
                    View Details
                  </Button>
                </VStack>
              </Box>
            ))}
          </VStack>
        </VStack>
      </Container>

      <Footer />
    </>
  );
};

export default CareerPage;
