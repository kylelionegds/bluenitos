import React from "react";
import { VStack, HStack, Input, Flex } from "@chakra-ui/react";
import { Icon, Button, Text } from "@chakra-ui/react";
import { InputGroup, InputLeftElement } from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri'
import { BsBoxArrowInRight } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import ImText from './capa'

export default function Logon(){
  return(
    <HStack padding='8' bg='brand.300' direction='row' justifyContent='center'>
        <VStack margin-top='20' spacing={3}>
          <Flex color='white'>
            Faça seu cadastro
          </Flex>

          <InputGroup>
            <InputLeftElement
              color='gray.200'
              pointerEvents="none"
              boxSize={12}
              children={<FaUser />}
            />
          <Input 
            type="email"
            variant='filled' 
            placeholder="Username"
            width='340px'
            height='56px' 
            borderRadius='10px' />
          </InputGroup>

            <InputGroup>
            <InputLeftElement
              color='gray.200'
              pointerEvents="none"
              boxSize={12}
              children={<MdEmail/>}
            />
          <Input 
            type="email"
            variant='filled' 
            placeholder="E-mail"
            width='340px'
            height='56px' 
            borderRadius='10px' />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              color='gray.200' 
              pointerEvents="none"
              boxSize={12}
              children={<RiLockPasswordFill/>}
            />
            <Input 
              type="password"
              variant='filled' 
              placeholder="Senha"
              width='340px'
              height='56px' 
              borderRadius='10px' />
            </InputGroup>
          <Button 
            type="button"
            width='340px'
            height='56px' 
            borderRadius='10px' 
          >
              Criar Conta
          </Button>

          <Text fontSize='14px' color='white'>
            <Icon as={BsBoxArrowInRight} color='brand.900' />
            Entrar com a minha conta
          </Text>
        </VStack>
        
        <ImText />
          
      </HStack>
  )
}