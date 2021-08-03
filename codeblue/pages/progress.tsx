import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import React from "react";
import { Layout } from "../components/Layout";

import { Text, Box } from '@chakra-ui/react'
import LanguageProgress  from '../components/LanguageProgress'
import { ApplicationPaths } from "../types";
import { TOKEN_KEY } from "../utils/authenticated";


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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { [TOKEN_KEY]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: ApplicationPaths.START,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default progress;
