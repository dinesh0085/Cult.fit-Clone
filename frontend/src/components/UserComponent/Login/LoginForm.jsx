import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";

const LoginForm = () => {
  const isError = "";

  return (
    <>
      <FormControl textAlign={"center"} isInvalid={isError}>
        <FormLabel>Email</FormLabel>
        <Input type="email" />
        <FormLabel>Password</FormLabel>

        <Input type="password" />
        <Button type="submit">Submit</Button>
      </FormControl>
      <Button color={"black"}>Signup</Button>
    </>
  );
};

export default LoginForm;
