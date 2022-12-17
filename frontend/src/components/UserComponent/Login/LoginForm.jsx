import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import RegisterComponent from "../Register/RegisterComponent";

const LoginForm = () => {
  const isError = "";

  return (
    <>
      <FormControl textAlign={"center"} isInvalid={isError}>
        <FormLabel>Email</FormLabel>
        <Input type="email" bg={"transparent"} />
        <FormLabel>Password</FormLabel>

        <Input type="password" />
        <Button
          bg={"rgba(255, 255, 255, 0.7);"}
          mt={4}
          w={"100%"}
          color={"black"}
          type="submit"
        >
          Submit
        </Button>
      </FormControl>
      <RegisterComponent />
    </>
  );
};

export default LoginForm;
