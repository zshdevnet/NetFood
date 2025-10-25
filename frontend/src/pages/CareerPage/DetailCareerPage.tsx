import { useState } from "react";
import {
  Container,
  Text,
  VStack,
  HStack,
  Box,
  Button,
  Heading,
  Icon,
  Flex,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { useParams } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import styles from "./DetailCareerPage.module.css";

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

const DetailCareerPage = () => {
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

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const cardBg = isDark ? "#23262F" : "white";
  const cardBorder = isDark ? "gray.700" : "gray.100";
  const headingColor = isDark ? "white" : "gray.800";
  const subText = isDark ? "gray.300" : "gray.700";

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [formData, setFormData] = useState({ phone: "+1 ", email: "" });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\+?[0-9]{7,15}$/;
    return phoneRegex.test(phone);
  };

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "").replace(/^1/, "");
    const limited = cleaned.slice(0, 10);

    if (limited.length === 0) return "+1 ";
    if (limited.length <= 3) return `+1 (${limited}`;
    if (limited.length <= 6)
      return `+1 (${limited.slice(0, 3)}) ${limited.slice(3)}`;
    return `+1 (${limited.slice(0, 3)}) ${limited.slice(3, 6)}-${limited.slice(
      6
    )}`;
  };

  const handlePhoneChange = (value: string) => {
    if (!value.startsWith("+1")) return;

    const formatted = formatPhoneNumber(value);
    const digitsOnly = value.replace(/\D/g, "").replace(/^1/, "");

    setFormData({ ...formData, phone: formatted });

    if (digitsOnly.length > 0 && digitsOnly.length < 10) {
      setPhoneError("Phone number must be 10 digits");
    } else {
      setPhoneError("");
    }
  };

  const handleEmailChange = (value: string) => {
    setFormData({ ...formData, email: value });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value.length > 0 && !emailRegex.test(value)) {
      setEmailError(
        "Please enter a valid email address (e.g., example@domain.com)"
      );
    } else {
      setEmailError("");
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const phone = e.currentTarget.phone.value;

    let valid = true;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!validatePhone(phone)) {
      setPhoneError("Please enter a valid phone number.");
      valid = false;
    } else {
      setPhoneError("");
    }

    if (valid) {
      // Proceed with form submission logic
      console.log("Form submitted successfully");
    }
  };

  return (
    <>
      <Navigation />
      <Container maxW="1200px" py={{ base: 8, md: 12 }}>
        <Breadcrumb
          items={[
            { label: "Careers", href: "/careers" },
            { label: selectedJob.title, isCurrentPage: true },
          ]}
        />
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={12}
          align="start"
          mt={8}
        >
          {/* LEFT: Job Details */}
          <Box flex={1} minW={0}>
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              mb={2}
              color={headingColor}
            >
              Join Our Team
            </Heading>
            <Text color={subText}>
              If you're interested in one of our open positions, start by
              applying here and attaching your resume.
            </Text>
            <Box h="1px" bg={cardBorder} my={6} />
            <Text fontWeight="bold" mb={2}>
              Current open positions:
            </Text>
            <Text fontWeight="semibold" mb={2}>
              {selectedJob.title}
            </Text>
            <VStack align="start" mb={6} fontSize="md">
              <HStack>
                <Text fontWeight="bold">Department:</Text>
                <Text>{selectedJob.department}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Location:</Text>
                <Text>{selectedJob.location}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Type:</Text>
                <Text>{selectedJob.type}</Text>
              </HStack>
              {selectedJob.salary && (
                <HStack>
                  <Text fontWeight="bold">Salary:</Text>
                  <Text color="green.600">{selectedJob.salary}</Text>
                </HStack>
              )}
            </VStack>
            <Text color={subText}>{selectedJob.description}</Text>
            <Box mt={8}>
              <Text fontWeight="bold" mb={2}>
                Responsibilities:
              </Text>
              <VStack align="start" mb={2}>
                {selectedJob.responsibilities.map((item, idx) => (
                  <HStack key={idx} align="start">
                    <Icon
                      as={FiCheckCircle}
                      color={isDark ? "orange.500" : "#3E9A42"}
                      mt={1}
                    />
                    <Text as="span">{item}</Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
            <Box mt={8}>
              <Text fontWeight="bold" mb={2}>
                Requirements:
              </Text>
              <VStack align="start" mb={2}>
                {selectedJob.requirements.map((item, idx) => (
                  <HStack key={idx} align="start">
                    <Icon
                      as={FiCheckCircle}
                      color={isDark ? "orange.500" : "#3E9A42"}
                      mt={1}
                    />
                    <Text as="span">{item}</Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
            <Box mt={8}>
              <Text fontWeight="bold" mb={2}>
                Benefits & Perks:
              </Text>
              <VStack align="start" mb={2}>
                {selectedJob.benefits.map((item, idx) => (
                  <HStack key={idx} align="start">
                    <Icon
                      as={FiCheckCircle}
                      color={isDark ? "orange.500" : "#3E9A42"}
                      mt={1}
                    />
                    <Text as="span">{item}</Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
          </Box>
          {/* RIGHT: Application Form */}
          <Box
            flex={1}
            minW={0}
            bg={cardBg}
            borderRadius="xl"
            boxShadow="lg"
            p={8}
            border="1px"
            borderColor={cardBorder}
          >
            <Heading fontSize="xl" mb={2} color={headingColor} fontWeight="600">
              Apply Now
            </Heading>
            <Text fontSize="md" color={subText} mb={6}>
              Fill out the form below and our team will get back to you within
              24 hours.
            </Text>
            <form id="career-form" onSubmit={handleFormSubmit}>
              <VStack gap={6} align="stretch">
                <Box>
                  <Text mb={2} fontSize="sm" fontWeight="500" color={subText}>
                    Name{" "}
                    <Text as="span" color="#D35400">
                      *
                    </Text>
                  </Text>
                  <Input
                    placeholder="Your Name"
                    required
                    bg={isDark ? "#0F0F0F" : "gray.50"}
                    border="1px solid"
                    borderColor="gray.200"
                    _hover={{ borderColor: "#3E9A42" }}
                    _focus={{
                      borderColor: "#3E9A42",
                      boxShadow: "0 0 0 1px #3E9A42",
                    }}
                    borderRadius="xl"
                    size="lg"
                    transition="all 0.2s"
                  />
                </Box>
                <Box>
                  <Text mb={2} fontSize="sm" fontWeight="500" color={subText}>
                    Phone{" "}
                    <Text as="span" color="#D35400">
                      *
                    </Text>
                  </Text>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    required
                    bg={isDark ? "#0F0F0F" : "gray.50"}
                    border="1px solid"
                    borderColor="gray.200"
                    _hover={{ borderColor: "#3E9A42" }}
                    _focus={{
                      borderColor: "#3E9A42",
                      boxShadow: "0 0 0 1px #3E9A42",
                    }}
                    borderRadius="xl"
                    size="lg"
                    transition="all 0.2s"
                  />
                  {phoneError && (
                    <Text fontSize="sm" color="red.500" mt={1}>
                      {phoneError}
                    </Text>
                  )}
                </Box>
                <Box>
                  <Text mb={2} fontSize="sm" fontWeight="500" color={subText}>
                    Email{" "}
                    <Text as="span" color="#D35400">
                      *
                    </Text>
                  </Text>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    required
                    bg={isDark ? "#0F0F0F" : "gray.50"}
                    border="1px solid"
                    borderColor="gray.200"
                    _hover={{ borderColor: "#3E9A42" }}
                    _focus={{
                      borderColor: "#3E9A42",
                      boxShadow: "0 0 0 1px #3E9A42",
                    }}
                    borderRadius="xl"
                    size="lg"
                    transition="all 0.2s"
                  />
                  {emailError && (
                    <Text fontSize="sm" color="red.500" mt={1}>
                      {emailError}
                    </Text>
                  )}
                </Box>
                <Box>
                  <Text mb={2} fontSize="sm" fontWeight="500" color={subText}>
                    Message{" "}
                    <Text as="span" color="#D35400">
                      *
                    </Text>
                  </Text>
                  <Textarea
                    placeholder="Tell us about yourself, your experience, or ask a question..."
                    required
                    rows={6}
                    bg={isDark ? "#0F0F0F" : "gray.50"}
                    border="1px solid"
                    borderColor="gray.200"
                    _hover={{ borderColor: "#3E9A42" }}
                    _focus={{
                      borderColor: "#3E9A42",
                      boxShadow: "0 0 0 1px #3E9A42",
                    }}
                    borderRadius="xl"
                    resize="vertical"
                    transition="all 0.2s"
                  />
                </Box>
                <Box>
                  <Text mb={2} fontSize="sm" fontWeight="500" color={subText}>
                    Attach Resume
                  </Text>
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    border="0"
                    p={0}
                  />
                  <Text fontSize="xs" color="gray.500" mt={1}>
                    PDF, DOC, or DOCX. Max 5MB.
                  </Text>
                </Box>
                <Box display="flex" alignItems="center" mb={2}>
                  <input
                    type="checkbox"
                    id="agreeToCall"
                    required
                    className={styles.checkbox}
                  />
                  <label htmlFor="agreeToCall">
                    <Text as="span" fontSize="sm" color={subText}>
                      I agree to be contacted by phone for business inquiries{" "}
                      <Text as="span" color="#D35400">
                        *
                      </Text>
                    </Text>
                  </label>
                </Box>
                <Button
                  type="submit"
                  bg="#D35400"
                  color="white"
                  size="lg"
                  fontWeight="600"
                  h="56px"
                  fontSize="md"
                  _hover={{
                    bg: "#E55100",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px rgba(211, 84, 0, 0.3)",
                  }}
                  _active={{
                    transform: "translateY(0)",
                    boxShadow: "0 4px 12px rgba(211, 84, 0, 0.2)",
                  }}
                  borderRadius="xl"
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  w="100%"
                >
                  Submit Application
                </Button>
              </VStack>
            </form>
            <Text fontSize="xs" color="gray.500" mt={4}>
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </Text>
          </Box>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default DetailCareerPage;
