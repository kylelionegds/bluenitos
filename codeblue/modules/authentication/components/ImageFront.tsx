import { Image, Text, VStack } from "@chakra-ui/react";

import { Images } from "../../../constants";

export default function ImText() {
  return (
    <VStack alignItems="center" spacing="12" w="80%">
      <Image w="60%" src={Images.COVER} alt="landing-page-coding" />
      <Text textAlign="center" color="white" fontSize="19px">
        Junte-se a uma comunidade de{" "}
        <Text color="brand.200">desenvolvedores</Text> praticando, competindo e
        desenvolvendo as suas <Text color="brand.800">habilidades</Text>
      </Text>
    </VStack>
  );
}
