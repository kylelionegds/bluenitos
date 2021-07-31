import React, { ChangeEvent } from "react";
import { IconType } from "react-icons/lib";

import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

interface FormInputProps {
  placeholder: string;
  icon: IconType;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function FormInput({
  placeholder,
  icon,
  type,
  onChange,
}: FormInputProps) {
  return (
    <InputGroup>
      <InputLeftElement
        color="gray.100"
        pointerEvents="none"
        boxSize={12}
        children={<Icon as={icon} color="gray.100" />}
      />
      <Input
        onChange={onChange}
        type={type || "text"}
        placeholder={placeholder || undefined}
        _placeholder={{
          color: "gray.100",
          textTransform: "lowercase",
        }}
        width="100%"
        size="lg"
        fontSize="sm"
        borderRadius="md"
        border="none"
        bg="brand.400"
        color="gray.100"
        pl="12"
      />
    </InputGroup>
  );
}
