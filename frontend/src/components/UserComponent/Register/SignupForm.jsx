import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import register from "../../../redux/User/Register/register.action";

const iniState = {
  name: "",
  lname: "",
  email: "",
  password: "",
  password_confirmation: "",
  tc: true,
};

const SignupPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const dispatch = useDispatch();
  const { isLoading, errorMessage, successMessage } = useSelector(
    (store) => store.register,
  );
  const [user, setUser] = React.useState(iniState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(user));
    setUser(iniState);
  };

  // console.log(user);
  console.log(errorMessage);
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
                {errorMessage ? (
                  <Alert fontWeight={"bold"} status="error" bg={"transparent"}>
                    <AlertIcon />
                    {errorMessage}
                  </Alert>
                ) : null}
                {successMessage ? (
                  <Alert
                    fontWeight={"bold"}
                    status="success"
                    bg={"transparent"}
                  >
                    <AlertIcon />
                    {successMessage}
                  </Alert>
                ) : null}
                <HStack>
                  <Box>
                    <FormControl id="name">
                      <FormLabel>First Name</FormLabel>
                      <Input
                        placeholder={"Enter First Name"}
                        onChange={handleChange}
                        type="text"
                        name="name"
                        value={user.name}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lname">
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        placeholder={"Enter Last Name"}
                        onChange={handleChange}
                        type="text"
                        name="lname"
                        value={user.lname}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    placeholder={"Enter Email"}
                    onChange={handleChange}
                    name="email"
                    value={user.email}
                    type="email"
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      placeholder={"Enter Password"}
                      onChange={handleChange}
                      name="password"
                      value={user.password}
                      type={showPassword ? "text" : "password"}
                    />
                    <InputRightElement h={"full"}>
                      <Button
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
                <FormControl id="password_confirmation">
                  <FormLabel>Confirm Password</FormLabel>
                  <InputGroup>
                    <Input
                      placeholder={"Enter Confirm Password"}
                      onChange={handleChange}
                      name="password_confirmation"
                      value={user.password_confirmation}
                      type={showPassword2 ? "text" : "password"}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        type={showPassword2 ? "text" : "password"}
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword2((showPassword2) => !showPassword2)
                        }
                      >
                        {showPassword2 ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <Stack>
                  <Button
                    type="submit"
                    bg={"rgba(255, 255, 255, 0.7)"}
                    mt={4}
                    isLoading={isLoading}
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
