import React from "react";
import { HStack, Link, LinkProps, Text } from "@chakra-ui/react";

interface FooterProps extends LinkProps {
  credits?: string;
}

export function Footer({ credits, href }: FooterProps) {
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
        to={href}
        _hover={{ color: "brand.200" }}
      >
        {credits}
      </Text>
    </HStack>
  );
}
