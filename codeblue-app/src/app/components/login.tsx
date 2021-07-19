import React from "react";
import { VStack, HStack, Input, Flex } from "@chakra-ui/react";
import { Icon, Button, Text } from "@chakra-ui/react";
import { InputGroup, InputLeftElement } from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri'
import { BsBoxArrowInRight } from 'react-icons/bs'
import ImText from './capa'

export default function Login(){
  return(
    <HStack padding='8' bg='brand.300' direction='row' justifyContent='center'>
        <VStack margin-top='20'>
          <Flex color='white'>
            Faça seu login
          </Flex>
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
              Entrar
          </Button>
          <Text fontSize='16px' color='white'>
            Esqueci minha senha
          </Text>
          <Text fontSize='14px' color='white'>
            <Icon as={BsBoxArrowInRight} color='brand.900'/>
            Criar Conta
          </Text>
        </VStack>
        
        <ImText />
          
      </HStack>
  )
}