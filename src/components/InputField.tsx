import React, { InputHTMLAttributes } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/core';
import { useField } from 'formik';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  size: never;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}> {label}</FormLabel>
      <Input {...field} {...props} id={field.name} />

      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default InputField;
