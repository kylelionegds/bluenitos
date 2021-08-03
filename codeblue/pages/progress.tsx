import React from "react";
import { Layout } from "../components/Layout";
import { Text, Box } from '@chakra-ui/react'
import LanguageProgress  from '../components/LanguageProgress'

const progress = () => {
  return (
    <Layout title="progresso" currentPath="progress">
      <Text
        color='gray.100'
      >
        Exercite seu cérebro e aumente suas conexões
      </Text>
      <Box bg='gray.50' p={3} mt={9} borderRadius='10'>
        <LanguageProgress language='c#' value={50} />
        <LanguageProgress language='javascript' value={85} />
        <LanguageProgress language='sql' value={30} />
        <LanguageProgress language='python' value={50} />
      </Box>

    </Layout>
  );
};

export default progress;
