import React from "react";
import { Layout } from "../components/Layout";
import { Text, Box, HStack } from '@chakra-ui/react'
import LanguageProgress  from '../components/LanguageProgress'
import  ChallengeProgress  from '../components/ChallengeProgress'


const progress = () => {
  return (
    <Layout title="progresso" currentPath="progress">
      <Text
        color='gray.100'
      >
        Exercite sua lógica e expanda suas conexões
      </Text>

      <Text 
        color='gray.50'
        mt={8}
        fontSize='24'
      >
        por concluidos 
      </Text>
        <HStack alignItems='center'>
          <Box mt={2} bg='brand.500' borderRadius='10'>
            <ChallengeProgress challenge={1} points={10} />
            <ChallengeProgress challenge={2} points={15} />
            <ChallengeProgress challenge={3} points={15} />
          </Box>
        </HStack>

        <Text 
        color='gray.50'
        mt={8}
        fontSize='24'
      >
        por linguagens
      </Text>
      <Box bg='gray.50' p={3} mt={2} borderRadius='10'>
        <LanguageProgress language='c#' value={50} />
        <LanguageProgress language='javascript' value={85} />
      </Box>

    </Layout>
  );
};

export default progress;
