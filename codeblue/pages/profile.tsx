import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import React from "react";

import { Layout } from "../components/Layout";

import { Box, VStack, HStack, Text, Image, Spacer } from "@chakra-ui/react";

import { ApplicationPaths } from "../types";
import { TOKEN_KEY } from "../utils/authenticated";

const profile = () => {
  return (
    <Layout title="perfil" currentPath="profile">
      <HStack align="stretch" alignItems="left" direction="column">
        <HStack ml="40">
          <VStack>
            <Box
              w="40"
              h="40"
              color="white"
              bg="brand.800"
              borderRadius="10"
              mt="10"
            >
              <Text alignItems="center">
                Profile {/* TODO => Link com a foto no banco de dados*/}
              </Text>
            </Box>

            <Text pl="10" fontSize="20px">
              Nome: {/* TODO => Link com nome no banco de dados*/}
            </Text>
            <Text pl="10" fontSize="20px">
              Email: {/* TODO => Link com o email no banco de dados*/}
            </Text>
          </VStack>
        </HStack>

        <Spacer />

        <VStack mr="20">
          <Image
            alt="Moça programando"
            boxSize="380px"
            src="/images/mocacodando.png"
          />
        </VStack>
      </HStack>

      <VStack w="100%" h="100%" direction="column" alignItems="center">
        <Text fontSize="20px">Conquistas:</Text>

        <Box w="80%" h="40" bg="brand.800" borderRadius="10"></Box>
      </VStack>
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
export default profile;
