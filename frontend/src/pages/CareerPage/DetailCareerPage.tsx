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
  Flex,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { FiMapPin, FiClock, FiCheckCircle, FiMail } from "react-icons/fi";
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

// Utility function to create URL-friendly slugs
const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

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

const DetailCareerPage = () => {
  const navigate = useNavigate();
  const { jobSlug } = useParams<{ jobSlug: string }>();

  const selectedJob = jobPositions.find((job) => job.slug === jobSlug);

  if (!selectedJob) {
    return (
      <>
        <Navigation />
        <Container maxW="1450px" py={{ base: 8, md: 12 }}>
          <VStack gap={8} align="stretch">
            <Box textAlign="center" py={12}>
              <Heading fontSize="2xl" color="gray.800" mb={4}>
                Job Not Found
              </Heading>
              <Text color="gray.600">
                The job position you're looking for doesn't exist.
              </Text>
            </Box>
          </VStack>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <Container maxW="1450px" py={{ base: 8, md: 12 }}>
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Careers", href: "/careers" },
            { label: selectedJob.title, isCurrentPage: true },
          ]}
        />

        <VStack gap={8} align="stretch">
          <Box
            bg="white"
            borderRadius="xl"
            boxShadow="lg"
            p={{ base: 6, md: 8 }}
            border="1px"
            borderColor="gray.100"
          >
            <VStack gap={6} align="stretch">
              <VStack gap={4} align="start">
                <HStack justify="space-between" w="full" flexWrap="wrap">
                  <Badge
                    colorScheme="orange"
                    variant="subtle"
                    px={3}
                    py={1}
                    fontSize="sm"
                  >
                    {selectedJob.department}
                  </Badge>
                  {selectedJob.salary && (
                    <Text fontSize="lg" fontWeight="bold" color="green.600">
                      {selectedJob.salary}
                    </Text>
                  )}
                </HStack>
                <Heading fontSize={{ base: "2xl", md: "3xl" }} color="gray.800">
                  {selectedJob.title}
                </Heading>
                <HStack gap={6} color="gray.600" fontSize="sm" flexWrap="wrap">
                  <HStack gap={1}>
                    <Icon as={FiMapPin} />
                    <Text>{selectedJob.location}</Text>
                  </HStack>
                  <HStack gap={1}>
                    <Icon as={FiClock} />
                    <Text>{selectedJob.type}</Text>
                  </HStack>
                </HStack>
              </VStack>

              <Box>
                <Text color="gray.700" lineHeight="tall" fontSize="lg">
                  {selectedJob.description}
                </Text>
              </Box>

              <Box>
                <Heading fontSize="xl" mb={4} color="gray.800">
                  Responsibilities
                </Heading>
                <VStack gap={3} align="stretch">
                  {selectedJob.responsibilities.map((item, index) => (
                    <Box
                      key={index}
                      display="flex"
                      alignItems="flex-start"
                      gap={2}
                    >
                      <Icon
                        as={FiCheckCircle}
                        color="orange.500"
                        mt={1}
                        flexShrink={0}
                      />
                      <Text color="gray.700">{item}</Text>
                    </Box>
                  ))}
                </VStack>
              </Box>

              <Box>
                <Heading fontSize="xl" mb={4} color="gray.800">
                  Requirements
                </Heading>
                <VStack gap={3} align="stretch">
                  {selectedJob.requirements.map((item, index) => (
                    <Box
                      key={index}
                      display="flex"
                      alignItems="flex-start"
                      gap={2}
                    >
                      <Icon
                        as={FiCheckCircle}
                        color="blue.500"
                        mt={1}
                        flexShrink={0}
                      />
                      <Text color="gray.700">{item}</Text>
                    </Box>
                  ))}
                </VStack>
              </Box>

              <Box>
                <Heading fontSize="xl" mb={4} color="gray.800">
                  Benefits & Perks
                </Heading>
                <VStack gap={3} align="stretch">
                  {selectedJob.benefits.map((item, index) => (
                    <Box
                      key={index}
                      display="flex"
                      alignItems="flex-start"
                      gap={2}
                    >
                      <Icon
                        as={FiCheckCircle}
                        color="green.500"
                        mt={1}
                        flexShrink={0}
                      />
                      <Text color="gray.700">{item}</Text>
                    </Box>
                  ))}
                </VStack>
              </Box>

              <Flex gap={4} direction={{ base: "column", md: "row" }} pt={4}>
                <Button
                  colorScheme="orange"
                  size="lg"
                  flex={1}
                  _hover={{ transform: "scale(1.02)" }}
                >
                  <HStack gap={2}>
                    <Icon as={FiMail} />
                    <Text>Apply Now</Text>
                  </HStack>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  flex={1}
                  onClick={() => navigate("/careers")}
                >
                  View More Jobs
                </Button>
              </Flex>
            </VStack>
          </Box>
        </VStack>
      </Container>
      <Footer />
    </>
  );
};

export default DetailCareerPage;
