import React from "react";
import { VStack } from "@chakra-ui/react";
import { Image, Text } from "@chakra-ui/react";

import { Images } from "app/constants";

export default function ImText() {
  return (
    <VStack alignItems="center" spacing="12">
      <Image w="60%" src={Images.COVER} alt="landing-page-coding" />
      <Text textAlign="center" color="white" fontSize="19px">
        Junte-se a uma comunidade de{" "}
        <Text color="brand.700">desenvolvedores</Text> praticando, competindo e
        desenvolvendo as suas <Text color="brand.900">habilidades</Text>
      </Text>
    </VStack>
  );
}
