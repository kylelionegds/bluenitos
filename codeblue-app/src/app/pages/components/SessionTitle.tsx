import React from "react";
import { Text } from "@chakra-ui/react";

interface SessionTitleProps {
  title: string;
}

export function SessionTitle({ title }: SessionTitleProps) {
  return (
    <Text
      mt="6"
      mb="2"
      cursor="pointer"
      color="white"
      fontSize="28"
      fontFamily="JetBrains Mono"
      fontWeight="500"
      textShadow="3px 3px #1E1A28"
      _hover={{
        borderBottom: "3px solid",
        borderColor: "brand.900",
      }}
    >
      {title}
    </Text>
  );
}
