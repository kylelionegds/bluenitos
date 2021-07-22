import React from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import {
  Button,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from "@chakra-ui/react";

import { ApplicationPaths } from "../../../types";
import ImText from "./components/ImageFront";

export default function Login() {
  return (
    <HStack padding="12" bg="brand.300" direction="row" justifyContent="center">
      <VStack spacing={3}>
        <Text color="white">Faça seu login</Text>
        <InputGroup>
          <InputLeftElement
            color="gray.200"
            pointerEvents="none"
            boxSize={12}
            children={<MdEmail />}
          />
          <Input
            type="email"
            variant="filled"
            placeholder="E-mail"
            width="20rem"
            height="4rem"
            borderRadius="10"
          />
        </InputGroup>

        <InputGroup>
          <InputLeftElement
            color="gray.200"
            pointerEvents="none"
            boxSize={12}
            children={<RiLockPasswordFill />}
          />
          <Input
            type="password"
            variant="filled"
            placeholder="Senha"
            width="20rem"
            height="4rem"
            borderRadius="10"
          />
        </InputGroup>
        <Button type="button" width="20rem" height="38" borderRadius="10px">
          Entrar
        </Button>

        <Text
          as={Link}
          to={ApplicationPaths.CREATE}
          fontSize="14"
          color="white"
        >
          <Icon as={BsBoxArrowInRight} color="brand.900" />
          Criar Conta
        </Text>
      </VStack>

      <ImText />
    </HStack>
  );
}
