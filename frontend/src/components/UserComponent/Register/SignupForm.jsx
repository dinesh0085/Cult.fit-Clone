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
import { useDispatch } from "react-redux";
import register from "../../../redux/User/Register/register.action";

const SignupPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();
  const [user, setUser] = React.useState({
    name: "",
    lName: "",
    email: "",
    password: "",
    tc: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(user));
  };

  console.log(user);
  return (
    <>
      <Flex
        color={"rgba(255, 255, 255, 0.7)"}
        align={"center"}
        justify={"center"}
        bg={"black"}
      >
        <Stack>
          <form onSubmit={handleSubmit}>
            <Box>
              <Stack spacing={4}>
                <HStack>
                  <Box w={"100%"}>
                    <FormControl id="name" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        placeholder={"Enter First Name"}
                        onChange={handleChange}
                        type="text"
                        name="name"
                        value={user.firstName}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    {/* <FormControl id="lname">
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        placeholder={"Enter Last Name"}
                        onChange={handleChange}
                        name="lname"
                        type="text"
                        value={user.lName}
                      />
                    </FormControl> */}
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    placeholder={"Enter Email"}
                    onChange={handleChange}
                    name="email"
                    value={user.email}
                    type="email"
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      placeholder={"Enter Email"}
                      onChange={handleChange}
                      name="password"
                      value={user.email}
                      type={showPassword ? "text" : "password"}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        placeholder={"Enter Password"}
                        name={"password"}
                        value={user.password}
                        onChange={handleChange}
                        type={showPassword ? "text" : "password"}
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
                    type="submit"
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
          </form>
        </Stack>
      </Flex>
    </>
  );
};

export default SignupPage;
