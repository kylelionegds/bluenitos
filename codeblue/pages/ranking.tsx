import React from "react";
import { Layout } from "../components/Layout";
import { VStack, Box, Text, Avatar, HStack, Spacer } from "@chakra-ui/react"; 

const ranking = () => {
  return (
    <Layout title="ranking" currentPath="ranking">
      
      <VStack
        spacing={["6", "6", "12"]}
        align="stretch"
        alignItems="center"
        direction="column"
        
      >

      <Box boxShadow="outline" borderRadius="10" width="80%" mt='40px' h="100px" bg="brand.700" color="gray.50" px='10px'>
          <HStack alignItems='center' h='100px'>
            <Avatar size="md" bg="brand.900"/>  
            <Text mt="8" ml="6" fontSize="26px">
              1º 
            </Text>
            <Spacer />
            <Text>
              {/* TODO => Nome da pessoa e pontuação */}ptos
            </Text>
          </HStack>
      </Box>

      <Box boxShadow="outline" borderRadius="10" ml="30px"width="80%" h="100px" bg="brand.700" color="gray.50" px='10px'>
        <HStack alignItems='center' h='100px'>
          <Avatar size="md" bg="brand.900" />
          <Text mt="8" ml="6" fontSize="26px">
            2º
          </Text>
          <Spacer />
            <Text>
               {/* TODO => Nome da pessoa e pontuação */} ptos
            </Text>
        </HStack>
      </Box>

      <Box boxShadow="outline" borderRadius="10" ml="30px" width="80%" h="100px" bg="brand.700" color="gray.50" px='10px'>
        <HStack alignItems='center' h='100px'>
          <Avatar size="md" bg="brand.900" />
          <Text mt="8" ml="6" fontSize="26px">
            3º
          </Text>
          <Spacer />
            <Text>
               {/* TODO => Nome da pessoa e pontuação */} ptos
            </Text>
        </HStack>
      </Box>  

      </VStack>

    </Layout>
  );
};

export default ranking;