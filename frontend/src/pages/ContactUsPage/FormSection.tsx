import { Box, Heading, Text, Input, Textarea, Button, Grid, VStack, Checkbox } from "@chakra-ui/react"
import { useState } from "react"

const FormSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "+1 ",
    shopAddress: "",
    shopName: "",
    message: "",
    agreeToCall: false
  })

  const [emailError, setEmailError] = useState("")
  const [phoneError, setPhoneError] = useState("")

  const charCount = formData.message.length
  const isMessageValid = charCount >= 60

  // Format phone number to +1 (240) 869 94 82
  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits and the +1 prefix if exists
    const cleaned = value.replace(/\D/g, '').replace(/^1/, '')
    
    // Limit to 10 digits (after +1)
    const limited = cleaned.slice(0, 10)
    
    if (limited.length === 0) return '+1 '
    if (limited.length <= 3) return `+1 (${limited}`
    if (limited.length <= 6) return `+1 (${limited.slice(0, 3)}) ${limited.slice(3)}`
    if (limited.length <= 8) return `+1 (${limited.slice(0, 3)}) ${limited.slice(3, 6)} ${limited.slice(6)}`
    return `+1 (${limited.slice(0, 3)}) ${limited.slice(3, 6)} ${limited.slice(6, 8)} ${limited.slice(8, 10)}`
  }

  const handlePhoneChange = (value: string) => {
    // Don't allow deleting the +1 prefix
    if (!value.startsWith('+1')) {
      return
    }
    
    const formatted = formatPhoneNumber(value)
    const digitsOnly = value.replace(/\D/g, '').replace(/^1/, '')
    
    setFormData({ ...formData, phone: formatted })
    
    // Only show error if user has started typing digits
    if (digitsOnly.length > 0 && digitsOnly.length < 10) {
      setPhoneError("Phone number must be 10 digits")
    } else {
      setPhoneError("")
    }
  }

  const handleEmailChange = (value: string) => {
    setFormData({ ...formData, email: value })
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (value.length > 0 && !emailRegex.test(value)) {
      setEmailError("Please enter a valid email address (e.g., example@domain.com)")
    } else {
      setEmailError("")
    }
  }

  const isPhoneValid = formData.phone.replace(/\D/g, '').replace(/^1/, '').length === 10
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Final validation before submit
    if (!isPhoneValid) {
      setPhoneError("Phone number must be 10 digits")
      return
    }
    if (!isEmailValid) {
      setEmailError("Please enter a valid email address")
      return
    }
    
    console.log("Form submitted:", formData)
  }

  return (
    <Box 
      as="form"
      onSubmit={handleSubmit}
      bg="white"
      p={{ base: 8, md: 10 }}
      borderRadius="2xl"
      mb={16}
      boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
      _dark={{ bg: "#1A1A1A", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", borderColor: "whiteAlpha.100" }}
      border="1px solid"
      borderColor="gray.100"
    >
      <Heading 
        fontSize={{ base: "2xl", md: "3xl" }}
        mb={2}
        color="gray.800"
        _dark={{ color: "#E0E0E0" }}
        fontWeight="600"
      >
        Send us a Message
      </Heading>
      <Text 
        fontSize="md" 
        color="gray.500" 
        _dark={{ color: "gray.400" }}
        mb={8}
      >
        Fill out the form below and we'll get back to you within 24 hours
      </Text>
      
      <VStack gap={6} align="stretch">
        {/* First Name and Last Name in Grid */}
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
          <Box>
            <Text mb={2} fontSize="sm" fontWeight="500" color="gray.700" _dark={{ color: "gray.300" }}>
              First Name <Text as="span" color="#D35400">*</Text>
            </Text>
            <Input
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              placeholder="Shawn"
              required
              bg="gray.50"
              _dark={{ bg: "#0F0F0F", borderColor: "whiteAlpha.200" }}
              border="1px solid"
              borderColor="gray.200"
              _hover={{ borderColor: "#D35400", _dark: { borderColor: "#D35400" } }}
              _focus={{ borderColor: "#D35400", boxShadow: "0 0 0 1px #D35400" }}
              borderRadius="xl"
              size="lg"
              transition="all 0.2s"
            />
          </Box>

          <Box>
            <Text mb={2} fontSize="sm" fontWeight="500" color="gray.700" _dark={{ color: "gray.300" }}>
              Last Name <Text as="span" color="#D35400">*</Text>
            </Text>
            <Input
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              placeholder="Zuba"
              required
              bg="gray.50"
              _dark={{ bg: "#0F0F0F", borderColor: "whiteAlpha.200" }}
              border="1px solid"
              borderColor="gray.200"
              _hover={{ borderColor: "#D35400", _dark: { borderColor: "#D35400" } }}
              _focus={{ borderColor: "#D35400", boxShadow: "0 0 0 1px #D35400" }}
              borderRadius="xl"
              size="lg"
              transition="all 0.2s"
            />
          </Box>
        </Grid>

        {/* Email and Phone in Grid */}
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
          <Box>
            <Text mb={2} fontSize="sm" fontWeight="500" color="gray.700" _dark={{ color: "gray.300" }}>
              Email Address <Text as="span" color="#D35400">*</Text>
            </Text>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleEmailChange(e.target.value)}
              placeholder="info@netfood.com"
              required
              bg="gray.50"
              _dark={{ bg: "#0F0F0F", borderColor: "whiteAlpha.200" }}
              border="1px solid"
              borderColor={emailError ? "#D35400" : "gray.200"}
              _hover={{ borderColor: emailError ? "#D35400" : "#D35400", _dark: { borderColor: emailError ? "#D35400" : "#D35400" } }}
              _focus={{ borderColor: emailError ? "#D35400" : "#D35400", boxShadow: emailError ? "0 0 0 1px #D35400" : "0 0 0 1px #D35400" }}
              borderRadius="xl"
              size="lg"
              transition="all 0.2s"
            />
            {emailError && (
              <Text fontSize="xs" color="#D35400" mt={1} fontWeight="500">
                {emailError}
              </Text>
            )}
          </Box>

          <Box>
            <Text mb={2} fontSize="sm" fontWeight="500" color="gray.700" _dark={{ color: "gray.300" }}>
              Phone Number <Text as="span" color="#D35400">*</Text>
            </Text>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              placeholder="+1 (240) 869 94 82"
              required
              bg="gray.50"
              _dark={{ bg: "#0F0F0F", borderColor: "whiteAlpha.200" }}
              border="1px solid"
              borderColor={phoneError ? "#D35400" : "gray.200"}
              _hover={{ borderColor: phoneError ? "#D35400" : "#D35400", _dark: { borderColor: phoneError ? "#D35400" : "#D35400" } }}
              _focus={{ borderColor: phoneError ? "#D35400" : "#D35400", boxShadow: phoneError ? "0 0 0 1px #D35400" : "0 0 0 1px #D35400" }}
              borderRadius="xl"
              size="lg"
              transition="all 0.2s"
            />
            {phoneError && (
              <Text fontSize="xs" color="#D35400" mt={1} fontWeight="500">
                {phoneError}
              </Text>
            )}
          </Box>
        </Grid>

        {/* Shop Name and Address - Optional */}
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
          <Box>
            <Text mb={2} fontSize="sm" fontWeight="500" color="gray.700" _dark={{ color: "gray.300" }}>
              Shop Name <Text as="span" fontSize="xs" color="gray.400">(Optional)</Text>
            </Text>
            <Input
              value={formData.shopName}
              onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
              placeholder="Your business name"
              bg="gray.50"
              _dark={{ bg: "#0F0F0F", borderColor: "whiteAlpha.200" }}
              border="1px solid"
              borderColor="gray.200"
              _hover={{ borderColor: "#D35400", _dark: { borderColor: "#D35400" } }}
              _focus={{ borderColor: "#D35400", boxShadow: "0 0 0 1px #D35400" }}
              borderRadius="xl"
              size="lg"
              transition="all 0.2s"
            />
          </Box>

          <Box>
            <Text mb={2} fontSize="sm" fontWeight="500" color="gray.700" _dark={{ color: "gray.300" }}>
              Shop Address <Text as="span" fontSize="xs" color="gray.400">(Optional)</Text>
            </Text>
            <Input
              value={formData.shopAddress}
              onChange={(e) => setFormData({ ...formData, shopAddress: e.target.value })}
              placeholder="123 Main St, City, State"
              bg="gray.50"
              _dark={{ bg: "#0F0F0F", borderColor: "whiteAlpha.200" }}
              border="1px solid"
              borderColor="gray.200"
              _hover={{ borderColor: "#D35400", _dark: { borderColor: "#D35400" } }}
              _focus={{ borderColor: "#D35400", boxShadow: "0 0 0 1px #D35400" }}
              borderRadius="xl"
              size="lg"
              transition="all 0.2s"
            />
          </Box>
        </Grid>

        {/* Message - Required minimum 80 words */}
        <Box>
          <Box mb={2} display="flex" justifyContent="space-between" alignItems="center">
            <Text fontSize="sm" fontWeight="500" color="gray.700" _dark={{ color: "gray.300" }}>
              Message <Text as="span" color="#D35400">*</Text>
            </Text>
            <Text 
              fontSize="xs" 
              color={isMessageValid ? "#D35400" : "#D35400"}
              fontWeight="600"
              bg={isMessageValid ? "green.50" : "orange.50"}
              _dark={{ bg: isMessageValid ? "green.900/20" : "orange.900/20" }}
              px={3}
              py={1}
              borderRadius="full"
            >
              {charCount} / 60 characters
            </Text>
          </Box>
          <Textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your wholesale needs, product interests, or any questions you have..."
            required
            minLength={60}
            rows={6}
            bg="gray.50"
            _dark={{ bg: "#0F0F0F", borderColor: "whiteAlpha.200" }}
            border="1px solid"
            borderColor="gray.200"
            _hover={{ borderColor: "#D35400", _dark: { borderColor: "#D35400" } }}
            _focus={{ borderColor: "#D35400", boxShadow: "0 0 0 1px #D35400" }}
            borderRadius="xl"
            resize="vertical"
            transition="all 0.2s"
          />
          {!isMessageValid && formData.message.length > 0 && (
            <Text fontSize="xs" color="#D35400" mt={2} fontWeight="500">
              📝 Please write at least {60 - charCount} more character{60 - charCount !== 1 ? 's' : ''} to help us understand your needs better
            </Text>
          )}
        </Box>

        {/* Agreement Checkbox */}
        <Box>
          <Checkbox.Root
            checked={formData.agreeToCall}
            onCheckedChange={(e) => setFormData({ ...formData, agreeToCall: e.checked === true })}
            colorPalette="green"
            size="sm"
          >
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>
              <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.300" }}>
                I agree to be contacted by phone for business inquiries <Text as="span" color="#D35400">*</Text>
              </Text>
            </Checkbox.Label>
          </Checkbox.Root>
        </Box>

        {/* Submit Button */}
        <Button
          type="submit"
          bg="#D35400"
          color="white"
          size="lg"
          fontFamily="accent"
          fontWeight="600"
          h="56px"
          fontSize="md"
          _hover={{ bg: "#E55100", transform: "translateY(-2px)", boxShadow: "0 8px 20px rgba(211, 84, 0, 0.3)" }}
          _active={{ transform: "translateY(0)", boxShadow: "0 4px 12px rgba(211, 84, 0, 0.2)" }}
          _dark={{ bg: "#D35400", _hover: { bg: "#E55100" } }}
          disabled={!isMessageValid || !formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.agreeToCall}
          borderRadius="xl"
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        >
          Send Message ✉️
        </Button>
      </VStack>
    </Box>
  )
}

export default FormSection
