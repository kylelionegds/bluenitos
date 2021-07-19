import React from 'react';
import { VStack, Box } from "@chakra-ui/react";
import { Image, Text } from "@chakra-ui/react";
import Capa from '../../app/images/capa.png'

export default function ImText() {
  return(
    <VStack>
      <Box>
        <Image 
          src={Capa} 
          alt='landing-page-coding'
          height='424px'
          width='571px'
          left='660px'
        />
      </Box>
     
        <Text
          textAlign='center' 
          color='white'
          fontSize='25px'
        >
          Junte-se a uma comunidade de <Text color='brand.700'>desenvolvedores</Text> praticando, competindo e desenvolvendo as suas <Text color='brand.800'>habilidades</Text>
        </Text>      
     
    </VStack>
  )
}