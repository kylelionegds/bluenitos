import React from 'react';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { HiCheckCircle } from 'react-icons/hi'

export default function SingleProgress() {
  return (
    <>
      <HStack p={2} ml={3} mr={3} spacing={6}>
        <Icon as={HiCheckCircle} color='success' />
        <Text
          color='brand.400'
        >
          <strong>Hello World</strong>
        </Text>
        <Text
          color='brand.400'
        >
          100 pontos
        </Text>
      </HStack>
    </>
  )
}