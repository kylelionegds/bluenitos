import { Footer } from "app/components/Footer";
import { Images } from "app/constants";
import React from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import {
  Button,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from "@chakra-ui/react";

import { ApplicationPaths } from "../../../types";
import ImText from "./components/ImageFront";

export default function Logon() {
  return (
    <HStack
      w="100%"
      minH="100vh"
      bg="brand.300"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={2}>
        <Image src={Images.LOGO} mb="10" />
        <Text color="white" fontSize="2xl">
          Faça seu cadastro
        </Text>
        <InputGroup>
          <InputLeftElement
            color="gray.100"
            pointerEvents="none"
            boxSize={14}
            children={<FaUser />}
          />
          <Input
            type="text"
            placeholder="Username"
            width="100%"
            height="14"
            borderRadius="10px"
            border="none"
            bg="brand.400"
            color="gray.100"
            pl="12"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            color="gray.100"
            pointerEvents="none"
            boxSize={14}
            children={<MdEmail />}
          />
          <Input
            type="email"
            placeholder="Email"
            width="100%"
            height="14"
            borderRadius="10px"
            border="none"
            bg="brand.400"
            color="gray.100"
            pl="12"
          />
        </InputGroup>

        <InputGroup>
          <InputLeftElement
            color="gray.100"
            pointerEvents="none"
            boxSize={14}
            children={<RiLockPasswordFill />}
          />
          <Input
            type="password"
            placeholder="Senha"
            width="100%"
            height="14"
            borderRadius="10px"
            border="none"
            bg="brand.400"
            color="gray.100"
            pl="12"
          />
        </InputGroup>
        <Button
          type="button"
          width="340px"
          height="12"
          borderRadius="10px"
          _hover={{ bg: "brand.200" }}
        >
          Criar conta
        </Button>

        <Text
          as={Link}
          to={ApplicationPaths.LOGIN}
          fontSize="md"
          color="white"
          mt="8"
        >
          <Icon as={BsBoxArrowInRight} color="brand.800" mr="2" />
          Entrar com a minha conta
        </Text>
      </VStack>

      <ImText />
      <Footer />
    </HStack>
  );
}
