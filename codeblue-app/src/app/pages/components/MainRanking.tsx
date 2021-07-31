import React from "react";
import { Avatar, HStack, Icon, Image, Text } from "@chakra-ui/react";
import Golden from "../../images/golden_1.svg";
import Silver from "../../images/silver_1.svg";
import Brass from "../../images/brass_1.svg";
import { FaStar } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

interface MainRankingProps {
  name: string;
  points: number;
  classification: number;
}

export function MainRanking({
  name,
  points,
  classification,
}: MainRankingProps) {
  const isPodium = () => {
    return classification < 4;
  };

  const switchIcon = () => {
    switch (classification) {
      case 1:
        return Golden;
      case 2:
        return Silver;
      case 3:
        return Brass;
      default:
        return "";
    }
  };

  return (
    <HStack mb={3} mt={2}>
      {isPodium() ? (
        <Image src={switchIcon()} />
      ) : (
        <Icon as={FaStar} fontSize="xl" mx="2" />
      )}

      <Text color="gray.400" fontWeight="600">
        {classification}º
      </Text>
      <Avatar size="sm" bg="brand.800" />

      <Text color="gray.400" fontSize="18" fontWeight="600">
        {name}
      </Text>
      <Text color="gray.400">{String(points)} pontos</Text>
    </HStack>
  );
}
