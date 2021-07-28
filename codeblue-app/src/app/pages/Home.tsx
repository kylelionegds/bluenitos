import React from "react";
import { Layout } from "../components/Layout";
import JsIcon from '../images/js-square.svg'
import PyIcon from '../images/py.svg'
import CsIcon from '../images/c-sharp.svg'
import SqlIcon from '../images/sql.svg'
import Golden from '../images/golden_1.svg'
import Silver from '../images/silver_1.svg'
import Brass from '../images/brass_1.svg'
import Profile from '../images/avatar-2.svg'
import SingleChallenge from './components/SingleChallenge'
import SingleProgress from './components/SingleProgress'
import SeeMore from './components/SeeMore'

import {
  Text,
  Box,
  HStack,
  Icon,
  Image,
} from "@chakra-ui/react";


export function Home() {
  return (
    <Layout title="home" currentPath="home">
      <Text
        color='#ffffff'
        fontSize='28'
        mt={5}
      >
        linguagens </Text>

      <HStack mt={2} p={3} spacing={8}>
        <Box
          direction="row"
          bg='brand.500'
          p={3}
          rounded='lg'
          boxShadow='dark-lg'
        >
          <HStack justifyContent='center'>
            <Image mb={3} w={['2', '2', '5']} src={JsIcon} />
            <Text
              color='#ffffff'
              fontSize={20}
            >
              javascript
            </Text>
          </HStack>
        </Box>

        <Box
          bg='brand.500'
          p={3}
          spacing={5}
          rounded='lg'
          boxShadow='dark-lg'
        >
          <HStack justifyContent='center'>
            <Image mb={3} w={['2', '2', '5']} src={PyIcon} />
            <Text
              color='#ffffff'
              fontSize={20}
            >
              python
            </Text>
          </HStack>
        </Box>

        <Box
          bg='brand.500'
          p={3}
          spacing={5}
          rounded='lg'
          boxShadow='dark-lg'
        >
          <HStack justifyContent='center'>
            <Image mb={3} w={['2', '2', '4']} src={SqlIcon} />
            <Text
              color='#ffffff'
              fontSize={20}
            >
              sql
            </Text>
          </HStack>
        </Box>
        <Box
          bg='brand.500'
          p={2}
          spacing={5}
          rounded='lg'
          boxShadow='dark-lg'
        >
          <HStack jutifyContent='center'>
            <Image mb={3} w={['5', '5', '6']} src={CsIcon} />
            <Text
              color='#ffffff'
              fontSize={20}
            >
              c-sharp
            </Text>
          </HStack>
        </Box>
      </HStack>

      <Text
        fontSize={26}
        color='#ffffff'
        mt={3}
      >
        principais desafios
      </Text>

      <HStack ml={5} spacing={6}>
        <SingleChallenge />
        <SingleChallenge />
        <SingleChallenge />
        <SingleChallenge />
      </HStack>

      <HStack spacing={10}>
        <Box>
          <Text
            fontSize={26}
            color='#ffffff'
            mb={.5}
          >
            ranking geral
          </Text>

          <Box bg='brand.200' rounded='lg' p={2} >
            <HStack mb={3} mt={2}>
              <Image src={Golden} />
              <Text color='gray.400'>1</Text>
              <Image src={Profile} w='8' />
              <Text
                color='gray.400'
                fontSize='18'
              > Maria
              </Text>
              <Text color='gray.400'>350 pontos</Text>
            </HStack>
            <HStack >
              <Image src={Silver} />
              <Text color='gray.400'>2</Text>
              <Image src={Profile} w='8' />
              <Text
                color='gray.400'
                fontSize='18'
              > João
              </Text>
              <Text color='gray.400'>290 pontos</Text>
            </HStack>
            <HStack mt={2}>
              <Image src={Brass} />
              <Text color='gray.400'>3</Text>
              <Image src={Profile} w='8' />
              <Text
                color='gray.400'
                fontSize='18'
              > Paula
              </Text>
              <Text color='gray.400'>250 pontos</Text>
            </HStack>
            <SeeMore />
          </Box>
        </Box>

        <Box>
          <Text
            mb={.5}
            fontSize={28}
            color='#ffffff'
          >
            meu progresso
          </Text>

          <Box bg='brand.200' borderRadius='5' >
            <SingleProgress />
            <SingleProgress />
            <SeeMore />
          </Box>

        </Box>
      </HStack>
    </Layout>
  );
}
