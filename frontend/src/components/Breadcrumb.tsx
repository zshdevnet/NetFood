import { HStack, Text, Icon } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FiChevronRight, FiHome } from "react-icons/fi";

interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <HStack
      gap={2}
      fontSize="sm"
      color="gray.600"
      py={4}
      overflow="hidden"
      flexWrap="wrap"
    >
      {/* Home icon as first item */}
      <RouterLink to="/" style={{ textDecoration: "none" }}>
        <HStack
          gap={1}
          color="gray.500"
          _hover={{ color: "#D35400" }}
          transition="color 0.2s ease"
        >
          <Icon as={FiHome} boxSize={4} />
          <Text>Home</Text>
        </HStack>
      </RouterLink>

      {/* Separator */}
      <Icon as={FiChevronRight} boxSize={3} color="gray.400" />

      {/* Breadcrumb items */}
      {items.map((item, index) => (
        <HStack key={index} gap={2}>
          {item.href && !item.isCurrentPage ? (
            <RouterLink to={item.href} style={{ textDecoration: "none" }}>
              <Text
                color="gray.500"
                _hover={{ color: "#D35400" }}
                transition="color 0.2s ease"
                fontWeight="medium"
              >
                {item.label}
              </Text>
            </RouterLink>
          ) : (
            <Text
              color={item.isCurrentPage ? "#D35400" : "gray.800"}
              fontWeight={item.isCurrentPage ? "semibold" : "medium"}
            >
              {item.label}
            </Text>
          )}

          {/* Add separator if not last item */}
          {index < items.length - 1 && (
            <Icon as={FiChevronRight} boxSize={3} color="gray.400" />
          )}
        </HStack>
      ))}
    </HStack>
  );
};

export default Breadcrumb;
