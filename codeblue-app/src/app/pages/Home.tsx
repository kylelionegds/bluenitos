import React from "react";
import { Layout } from "../components/Layout";
import JsIcon from "../images/js-square.svg";
import PyIcon from "../images/py.svg";
import CsIcon from "../images/c-sharp.svg";
import SqlIcon from "../images/sql.svg";
import Profile from "../images/avatar-2.svg";
import SingleChallenge from "./components/SingleChallenge";
import SingleProgress from "./components/SingleProgress";
import { BsArrowRight } from "react-icons/bs";

import {
  Text,
  Box,
  HStack,
  Icon,
  Image,
  VStack,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Language } from "./components/Language";
import { SessionTitle } from "./components/SessionTitle";
import { MainRanking } from "./components/MainRanking";

const langugages = [
  {
    name: "javascript",
    src: JsIcon,
    description:
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web",
  },
  {
    name: "python",
    src: PyIcon,
    description:
      "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.",
  },
  {
    name: "c-sharp",
    src: CsIcon,
    description:
      "C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET. A sua sintaxe orientada a objetos foi baseada no C++ mas inclui muitas influências de outras linguagens de programação, como Object Pascal e, principalmente, Java.",
  },
  {
    name: "sql",
    src: SqlIcon,
    description:
      "Structured Query Language, ou Linguagem de Consulta Estruturada ou SQL, é a linguagem de pesquisa declarativa padrão para banco de dados relacional. Muitas das características originais do SQL foram inspiradas na álgebra relacional.",
  },
];

export function Home() {
  return (
    <Layout title="home" currentPath="home">
      <VStack spacing={12} alignItems="flex-start" mt="4">
        <VStack spacing={2} alignItems="flex-start">
          <>
            <SessionTitle title="linguagens" />
            <HStack w="100%" px={3} spacing={10}>
              {langugages.map((language, index) => (
                <Language
                  key={index}
                  name={language.name}
                  src={language.src}
                  description={language.description}
                />
              ))}
            </HStack>
          </>
        </VStack>

        <VStack spacing={2} alignItems="flex-start">
          <>
            <SessionTitle title="principais desafios" />
            <HStack ml={5} spacing={6}>
              <SingleChallenge />
              <SingleChallenge />
              <SingleChallenge />
              <SingleChallenge />
            </HStack>
          </>
        </VStack>

        <HStack px="20" alignItems="flex-start" w="100%">
          <VStack alignItems="flex-start" w="100%">
            <SessionTitle title="ranking geral" />

            <Flex
              w="96"
              minH="xs"
              direction="column"
              bg="brand.200"
              rounded="lg"
              p={2}
            >
              <MainRanking name="Maria" points={350} classification={1} />
              <MainRanking name="João" points={290} classification={2} />
              <MainRanking name="Pedro" points={250} classification={3} />
              <MainRanking name="Marta" points={120} classification={4} />

              <Button
                w="min"
                color="brand.400"
                mt="auto"
                alignSelf="flex-end"
                rightIcon={
                  <Icon as={BsArrowRight} color="brand.400" fontSize="20" />
                }
              >
                Veja mais
              </Button>
            </Flex>
          </VStack>

          <VStack alignItems="flex-start" w="100%">
            <SessionTitle title="meu progresso" />

            <Flex
              w="96"
              minH="xs"
              direction="column"
              bg="brand.200"
              rounded="lg"
              p={2}
            >
              <SingleProgress />

              <Button
                w="min"
                color="brand.400"
                mt="auto"
                alignSelf="flex-end"
                rightIcon={
                  <Icon as={BsArrowRight} color="brand.400" fontSize="20" />
                }
              >
                Veja mais
              </Button>
            </Flex>
          </VStack>
        </HStack>
      </VStack>
    </Layout>
  );
}
