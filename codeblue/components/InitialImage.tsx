import { Image, Text, VStack } from "@chakra-ui/react";
import { Images } from "../constants";
import styled from "styled-components";

export function InitialImage() {
  return (
    <VStack spacing={10} w="100%" alignItems="center">
      <Image src={Images.COVER} alt="computer" w="60%" />
      <Text
        textAlign="center"
        color="gray.100"
        fontSize={["md", "2xl"]}
        w="80%"
      >
        Junte-se a uma comunidade de <PurpleText>desenvolvedores</PurpleText>{" "}
        praticando, <br /> competindo e desenvolvendo as suas{" "}
        <PinkText>habilidades</PinkText>.
      </Text>
    </VStack>
  );
}

const PurpleText = styled.strong`
  color: #7a7cff;
`;

const PinkText = styled.strong`
  color: #c869a9;
`;
