import React from "react";
import { HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <HStack
      position="fixed"
      bottom="0"
      left="0"
      m="0"
      w="100%"
      bg="brand.400"
      h="8"
      px="6"
      spacing="auto"
      color="gray.100"
    >
      <Text>@bluenitos</Text>
      <Text
        as={Link}
        to="https://storyset.com/web"
        _hover={{ color: "brand.200" }}
      >
        Web illustrations by Storyset
      </Text>
    </HStack>
  );
}
