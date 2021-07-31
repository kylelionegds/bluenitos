import React, {
  ChangeEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

import {
  checkIfFileAreCorrectType,
  checkIfFileAreTooBig,
  toBase64,
} from "../utils/functions";

import { Input } from "@chakra-ui/react";

interface Props {
  onChange: (result: string) => void;
  onError: (error: string) => void;
}

export const InputFile = forwardRef(({ onChange, onError }: Props, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target?.files?.length) {
      if (checkIfFileAreCorrectType(target?.files[0])) {
        if (checkIfFileAreTooBig(target?.files[0])) {
          toBase64(target?.files[0]).then((result) => onChange(result));
        } else {
          onError("Arquivo muito grande");
        }
      } else {
        onError("Arquivo com formato inválido");
      }
    }
  };

  useImperativeHandle(ref, () => ({
    click: () => {
      inputRef?.current?.click();
    },
  }));
  return (
    <>
      <Input
        id="file"
        accept="image/*"
        type="file"
        ref={inputRef}
        onChange={handleChange}
        display="none"
        placeholder="image"
      />
    </>
  );
});
