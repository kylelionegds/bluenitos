import React from 'react';
import { VStack, Box } from "@chakra-ui/react";
import { Image, Text } from "@chakra-ui/react";
import Capa from '../../app/images/capa.png'

export default function ImText() {
  return (
    <VStack>
      <Image
        ml='100px'
        src={Capa}
        alt='landing-page-coding'
        height='424px'
        width='571px'
      />

      <Text
        textAlign='center'
        color='white'
        fontSize='19px'
      >
        Junte-se a uma comunidade de <Text color='brand.700'>desenvolvedores</Text> praticando, competindo e desenvolvendo as suas <Text color='brand.900'>habilidades</Text>
      </Text>
    </VStack>
  )
}