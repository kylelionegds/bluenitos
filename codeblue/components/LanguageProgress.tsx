import { HStack, Progress, Box, Text } from '@chakra-ui/react'

interface LanguageProgressProps {
  language: string;
  value: number;
}

export default function LanguageProgress({
  language,
  value
}: LanguageProgressProps) {
  return (
    <>
      <Text
        color='gray.400'
        fontSize='30'
        mb='2'
      >
        {language}
      </Text>
      <Progress
        value={value}
        height='30'
        mb='2'
      />
    </>
  )
}
