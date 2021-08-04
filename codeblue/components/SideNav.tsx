import React from "react";
import {
  FaAward,
  FaCheckCircle,
  FaDumbbell,
  FaHome,
  FaUser,
} from "react-icons/fa";

import { Icon, IconButton, Link, Text, VStack } from "@chakra-ui/react";

import { Logo } from "../modules/authentication/components/Logo";
import { ApplicationPaths, Paths } from "../types";
import { Avatar } from "./Avatar";
import { useRouter } from "next/dist/client/router";

interface SideNavProps {
  currentPath: Paths;
}

export function SideNav({ currentPath }: SideNavProps) {
  const router = useRouter();
  return (
    <VStack w="15%" minH="100vh" bg="brand.400" px="4" py="8" spacing="6">
      <Avatar src="https://i.pinimg.com/originals/56/17/af/5617af08114fbd4068831424cbdb61ef.jpg" />
      <Text
        display={["none", "none", "flex"]}
        fontSize="lg"
        fontWeight="semibold"
        color="white"
      >
        @bluenitos
      </Text>
      <Logo />
      <VStack>
        <VStack spacing="0">
          <IconButton
            as={Link}
            href={ApplicationPaths.HOME}
            onClick={() => router.push(ApplicationPaths.HOME)}
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
          <Text display={["none", "none", "flex"]} color="white" m="0">
            início
          </Text>
        </VStack>
        <VStack spacing="0">
          <IconButton
            as={Link}
            onClick={() => router.push(ApplicationPaths.CHALLENGES)}
            m="0"
            aria-label="challenges"
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
          <Text display={["none", "none", "flex"]} color="white" m="0">
            desafios
          </Text>
        </VStack>
        <VStack spacing="0">
          <IconButton
            as={Link}
            onClick={() => router.push(ApplicationPaths.RANKING)}
            m="0"
            aria-label="ranking"
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
          <Text display={["none", "none", "flex"]} color="white" m="0">
            ranking
          </Text>
        </VStack>
        <VStack spacing="0">
          <IconButton
            as={Link}
            onClick={() => router.push(ApplicationPaths.PROGRESS)}
            m="0"
            aria-label="progress"
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
          <Text display={["none", "none", "flex"]} color="white" m="0">
            progresso
          </Text>
        </VStack>
        <VStack spacing="0">
          <IconButton
            as={Link}
            onClick={() => router.push(ApplicationPaths.PROFILE)}
            m="0"
            aria-label="profile"
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
          <Text display={["none", "none", "flex"]} color="white" m="0">
            perfil
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
}
