import React from "react";
import { HStack, Text } from "@chakra-ui/react";
import { Link, LinkProps } from "react-router-dom";

interface FooterProps extends LinkProps {
  credits?: string;
}

export function Footer({ credits, to }: FooterProps) {
  return (
    <HStack
      w="100%"
      m="0"
      h="8"
      px="6"
      left="0"
      position="absolute"
      bottom="0"
      marginInlineStart="0"
      bg="brand.400"
      spacing="auto"
      color="gray.100"
    >
      <Text>@bluenitos</Text>
      <Text
        display={["none", "none", "flex"]}
        as={Link}
        to={to}
        _hover={{ color: "brand.200" }}
      >
        {credits}
      </Text>
    </HStack>
  );
}
