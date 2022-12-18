import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const SignupPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <>
      <Flex
        color={"rgba(255, 255, 255, 0.7)"}
        align={"center"}
        justify={"center"}
        bg={"black"}
      >
        <Stack>
          <Box>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack>
                <Button
                  bg={"rgba(255, 255, 255, 0.7)"}
                  mt={4}
                  color={"black"}
                  loadingText="Submitting"
                >
                  Sign up
                </Button>
              </Stack>
              <Text m={"auto"} mt={8} fontSize={"13px"}>
                By Continuing you agree to the Terms of Services and Privacy
                policy.
              </Text>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default SignupPage;
