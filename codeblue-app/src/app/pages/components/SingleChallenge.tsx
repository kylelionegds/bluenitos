import React from "react";
import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { FaDumbbell } from "react-icons/fa"
import { BsArrowRightShort } from 'react-icons/bs'

export default function SingleChallenge(){
  return (
    <>
    <Box p={3} mt={3} mb={5} boxShadow='dark-lg'  rounded='lg' bg='brand.400'>
        <HStack justifyContent='center'>
          <Icon as={FaDumbbell} color='yellow' />
          <Text
            color='brand.800'
            fontSize='18'
          >
            hello world
          </Text>
        </HStack>
        <Text
          color='#ffffff'
          fontSize='16'
          textAlign='center'
          p={3}
        >
          print "hello world" and <br /> get started with <br /> conditional logic
        </Text>
        <Text
          color='brand.900'
          fontSize='14'
          textAlign='center'
        >
          Veja mais
        <Icon as={BsArrowRightShort} color='brand.900' fontSize='20' ml={.5} />
        </Text>
      </Box>
    </>
  )
}