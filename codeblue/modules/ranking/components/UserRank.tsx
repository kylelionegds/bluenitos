import { Avatar, Box, HStack, Spacer, Text } from "@chakra-ui/react";

interface UserRankProps {
  name: string;
  points: number;
  place: number;
  avatar: string;
}

export function UserRank({ name, points, place, avatar }: UserRankProps) {
  return (
    <Box
      boxShadow=""
      borderRadius="10"
      border={place === 1 ? "4px" : "0"}
      width="80%"
      mt="40px"
      h="100px"
      bg="brand.700"
      color="gray.50"
      px="4"
    >
      <HStack alignItems="center" h="100px">
        <Avatar
          color="white"
          src={avatar}
          name={name}
          size="md"
          bg="brand.800"
        />
        <Text mt="8" ml="6" fontSize="xl">
          {place}º
        </Text>

        <Text fontWeight="500" color="gray.100" px="4" fontSize="xl">
          {name}
        </Text>
        <Spacer />
        <Text>{points} ptos</Text>
      </HStack>
    </Box>
  );
}
