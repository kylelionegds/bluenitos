import React from "react";
import { FaUser } from "react-icons/fa";

import { Avatar as ChakraAvatar, Flex, Icon } from "@chakra-ui/react";

interface AvatarProps {
  name?: string;
  src?: string;
}

export function Avatar({ name, src }: AvatarProps) {
  return (
    <Flex
      w={["10", "14"]}
      h={["10", "14"]}
      borderRadius="full"
      bgGradient="linear(to-b, brand.900, brand.600)"
      justifyContent="center"
      alignItems="center"
    >
      <ChakraAvatar
        w={["8", "12"]}
        h={["8", "12"]}
        icon={<Icon as={FaUser} color="brand.800" />}
        name={name}
        src={src}
      />
    </Flex>
  );
}
