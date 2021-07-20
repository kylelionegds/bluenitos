import React from "react";
import {
  FaAward,
  FaCheckCircle,
  FaDumbbell,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import { Icon, IconButton, Text, VStack } from "@chakra-ui/react";

import { ApplicationPaths, Paths } from "../../../../types";
import { Avatar } from "../../../components/Avatar";
import { Logo } from "../../../components/Logo";

interface SideNavProps {
  currentPath: Paths;
}

export function SideNav({ currentPath }: SideNavProps) {
  return (
    <VStack w="15%" h="100vh" bg="brand.400" px="4" py="8" spacing="6">
      <Avatar src="https://i.pinimg.com/originals/56/17/af/5617af08114fbd4068831424cbdb61ef.jpg" />
      <Text fontSize="lg" fontWeight="semibold" color="white">
        @bluenitos
      </Text>
      <Logo />
      <VStack>
        <VStack spacing="0">
          <IconButton
            as={Link}
            to={ApplicationPaths.HOME}
            m="0"
            aria-label="home"
            color={
              currentPath === ApplicationPaths.HOME.replace("/", "")
                ? "brand.200"
                : "brand.800"
            }
            _hover={{
              color: "brand.600",
            }}
            size="lg"
            variant="nav"
            icon={<Icon as={FaHome} fontSize="2xl" />}
          />
          <Text color="white" m="0">
            início
          </Text>
        </VStack>
        <VStack spacing="0">
          <IconButton
            as={Link}
            to={ApplicationPaths.CHALLENGES}
            m="0"
            aria-label="home"
            color={
              currentPath === ApplicationPaths.CHALLENGES.replace("/", "")
                ? "brand.200"
                : "brand.800"
            }
            _hover={{
              color: "brand.200",
            }}
            size="lg"
            variant="nav"
            icon={<Icon as={FaDumbbell} fontSize="2xl" />}
          />
          <Text color="white" m="0">
            desafios
          </Text>
        </VStack>
        <VStack spacing="0">
          <IconButton
            as={Link}
            to={ApplicationPaths.RANKING}
            m="0"
            aria-label="home"
            color={
              currentPath === ApplicationPaths.RANKING.replace("/", "")
                ? "brand.200"
                : "brand.800"
            }
            _hover={{
              color: "brand.200",
            }}
            size="lg"
            variant="nav"
            icon={<Icon as={FaAward} fontSize="2xl" />}
          />
          <Text color="white" m="0">
            ranking
          </Text>
        </VStack>
        <VStack spacing="0">
          <IconButton
            as={Link}
            to={ApplicationPaths.PROGRESS}
            m="0"
            aria-label="home"
            color={
              currentPath === ApplicationPaths.PROGRESS.replace("/", "")
                ? "brand.200"
                : "brand.800"
            }
            _hover={{
              color: "brand.200",
            }}
            size="lg"
            variant="nav"
            icon={<Icon as={FaCheckCircle} fontSize="xl" />}
          />
          <Text color="white" m="0">
            progresso
          </Text>
        </VStack>
        <VStack spacing="0">
          <IconButton
            as={Link}
            to={ApplicationPaths.PROFILE}
            m="0"
            aria-label="home"
            color={
              currentPath === ApplicationPaths.PROFILE.replace("/", "")
                ? "brand.200"
                : "brand.800"
            }
            _hover={{
              color: "brand.200",
            }}
            size="lg"
            variant="nav"
            icon={<Icon as={FaUser} fontSize="xl" />}
          />
          <Text color="white" m="0">
            perfil
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
}
