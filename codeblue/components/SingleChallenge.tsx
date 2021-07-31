import React from "react";
import { Box, Button, HStack, Icon, Text } from "@chakra-ui/react";
import { FaDumbbell } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";

export default function SingleChallenge() {
  return (
    <Box
      p={3}
      mt={3}
      mb={5}
      boxShadow="4px 4px #C869A9"
      rounded="lg"
      bg="brand.400"
    >
      <HStack justifyContent="center">
        <Icon as={FaDumbbell} color="yellow" fontSize="2xl" />
        <Text color="brand.800" fontSize="18" fontWeight="600">
          hello world
        </Text>
      </HStack>
      <Text color="white" fontSize="16" textAlign="center" p={3}>
        print `&quot;`hello world`&quot;` and get started with <br />{" "}
        conditional logic
      </Text>
      <Button
        bg="transparent"
        color="brand.900"
        fontSize="14"
        textAlign="center"
      >
        Veja mais
        <Icon as={BsArrowRightShort} color="brand.900" fontSize="20" ml={0.5} />
      </Button>
    </Box>
  );
}
