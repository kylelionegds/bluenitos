import { Footer } from "app/components/Footer";
import { Images } from "app/constants";
import { StartButton } from "app/modules/start/components/StartButton";
import React from "react";

import { Flex, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";

export function Start() {
  return (
    <Flex
      w="100%"
      minH="100vh"
      bgColor="brand.300"
      flexDirection={["column", "row"]}
      alignItems={["center", "flex-start"]}
    >
      <Flex w="100%" h="10" bg="brand.400" display={["flex", "none"]} />
      <VStack
        alignItems={["center", "flex-start"]}
        spacing={["8", "8"]}
        my="8"
        px={["6", "12"]}
      >
        <Image
          pl={["none", "none", "none", "10"]}
          w={["36", "36", "48"]}
          src={Images.LOGO}
        />
        <HStack spacing={["4", "4", "8"]}>
          <Image w={["12", "20", "16"]} src={Images.JAVASCRIPT} />
          <Image w={["12", "20", "16"]} src={Images.CSHARP} />
          <Image w={["12", "20", "16"]} src={Images.PYTHON} />
          <Image w={["12", "20", "16"]} src={Images.MYSQL} />
        </HStack>
        <Text
          fontSize={["xl", "3xl"]}
          px={["8", "0"]}
          lineHeight="tall"
          w="auto"
          textAlign={["center", "left"]}
          color="gray.100"
        >
          teste e desenvolva seus <br /> conhecimentos e habilidades com as
          <br />
          linguagens de programação do momento
        </Text>
        <Stack
          w="100%"
          spacing="8"
          alignSelf="center"
          direction={["column", "column", "row"]}
        >
          <StartButton dataTestId="to-login-button" type="login" />
          <StartButton dataTestId="to-create-button" type="create" />
        </Stack>
      </VStack>
      <Image src={Images.STARTCOVER} />
      <Footer
        to="https://storyset.com/web"
        credits="Web illustrations by Storyset"
      />
    </Flex>
  );
}
