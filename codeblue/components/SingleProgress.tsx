import React from "react";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { HiCheckCircle } from "react-icons/hi";

export default function SingleProgress() {
  return (
    <>
      <HStack p={2} m={3} spacing={4}>
        <Icon as={HiCheckCircle} color="success" fontSize="xl" />
        <Text color="brand.400" fontWeight="600">
          Hello World
        </Text>
        <Text color="brand.400">100 pontos</Text>
      </HStack>
    </>
  );
}
