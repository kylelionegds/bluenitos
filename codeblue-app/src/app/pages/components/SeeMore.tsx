import React from 'react'
import { Text, Icon } from '@chakra-ui/react'
import { BsArrowRight } from 'react-icons/bs'

export default function SeeMore() {
  return (
    <Text
      color='brand.400'
      textAlign='right'
      mt='3'
    >
      veja mais
      <Icon as={BsArrowRight}
        color='brand.400'
        fontSize='20'
        mr={4}
      />
    </Text>
  )
}