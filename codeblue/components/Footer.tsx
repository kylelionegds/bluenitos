import React from "react";
import { HStack, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";

interface FooterProps {
  credits?: string;
  path?: string;
}

export function Footer({ credits, path }: FooterProps) {
  const router = useRouter();
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
        onClick={() => router.push(path!)}
        _hover={{ color: "brand.200" }}
      >
        {credits}
      </Text>
    </HStack>
  );
}
