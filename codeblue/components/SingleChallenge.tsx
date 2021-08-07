import { useRouter } from "next/dist/client/router";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { FaDumbbell } from "react-icons/fa";

import { Box, Button, Flex, HStack, Icon, Text } from "@chakra-ui/react";

import { ApplicationPaths } from "../types";

interface SingleChallengeProps {
  id: number;
  title: string;
  description: string;
}

export default function SingleChallenge({
  id,
  title,
  description,
}: SingleChallengeProps) {
  const router = useRouter();

  return (
    <Flex
      p={3}
      w="60"
      h="64"
      boxShadow="4px 4px #C869A9"
      rounded="lg"
      bg="brand.400"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <HStack justifyContent="center">
        <Icon as={FaDumbbell} color="yellow" fontSize="2xl" />
        <Text color="brand.800" fontSize="18" fontWeight="600">
          {title}
        </Text>
      </HStack>
      <Text color="white" fontSize="14" textAlign="left" p={3}>
        {description}
      </Text>
      <Button
        bg="transparent"
        color="yellow"
        fontSize="14"
        textAlign="center"
        onClick={() =>
          router.push({
            pathname: ApplicationPaths.CHALLENGE,
            query: { id: id },
          })
        }
      >
        Veja mais
        <Icon as={BsArrowRightShort} color="brand.800" fontSize="20" ml={0.5} />
      </Button>
    </Flex>
  );
}
