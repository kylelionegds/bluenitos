import React from "react";
import { VStack } from "@chakra-ui/react";
import { Image, Text } from "@chakra-ui/react";
import Photo from "../../../images/photo.png";

export default function ImText() {
  return (
    <VStack>
      <Image
        ml="100"
        src={Photo}
        alt="landing-page-coding"
        height="424"
        width="571"
      />
      <Text textAlign="center" color="white" fontSize="19">
        Junte-se a uma comunidade de{" "}
        <Text color="brand.700">desenvolvedores</Text> praticando, competindo e
        desenvolvendo as suas <Text color="brand.900">habilidades</Text>
      </Text>
    </VStack>
  );
}
