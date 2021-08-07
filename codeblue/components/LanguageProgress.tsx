import { HStack, Progress, Box, Text } from "@chakra-ui/react";

interface LanguageProgressProps {
  language: string;
  value: number;
}

export default function LanguageProgress({
  language,
  value,
}: LanguageProgressProps) {
  return (
    <>
      <Text color="gray.100" fontSize="30" mb="2">
        {language}
      </Text>
      <Progress
        borderRadius="3xl"
        bg="gray.100"
        value={value}
        height="30"
        mb="2"
      />
    </>
  );
}
