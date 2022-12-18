import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";

// Login Form Page
const LoginForm = () => {
  const isError = "";

  return (
    <>
      <FormControl textAlign={"center"} isInvalid={isError}>
        <FormLabel>Email</FormLabel>
        <Input type="email" />
        <FormLabel>Password</FormLabel>

        <Input type="password" />
        <Button
          bg={"rgba(255, 255, 255, 0.7)"}
          mt={4}
          w={"100%"}
          color={"black"}
          type="submit"
        >
          Submit
        </Button>
      </FormControl>
    </>
  );
};

export default LoginForm;
