import React from "react";
import {
  Button,
  HStack,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";

interface LanguageProps {
  name: string;
  src: string;
  description: string;
}

export function Language({ name, src, description }: LanguageProps) {
  return (
    <Popover>
      <PopoverTrigger>
        <HStack
          as={Button}
          justifyContent="flex-start"
          alignItems="center"
          direction="row"
          bg="brand.500"
          p={3}
          w="48"
          h="14"
          rounded="lg"
          boxShadow="4px 4px #C869A9"
          cursor="pointer"
          _hover={{
            bg: "brand.400",
          }}
        >
          <Image w={["2", "2", "5"]} src={src} alt={name} />
          <Text color="white" fontSize={20}>
            {name}
          </Text>
        </HStack>
      </PopoverTrigger>
      <PopoverContent bg="brand.400">
        <PopoverArrow bg="brand.400" />
        <PopoverCloseButton color="brand.900" />
        <PopoverHeader color="brand.800">{name.toUpperCase()}</PopoverHeader>
        <PopoverBody color="gray.100">{description}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
