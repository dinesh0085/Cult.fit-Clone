import {
  Box,
  Button,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "../CareFit.jpg";
import RegisterComponent from "../Register/RegisterComponent";
import React from "react";
import LoginForm from "./LoginForm";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useSelector } from "react-redux";
const LoginModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box cursor={"pointer"} onClick={onOpen}>
        <PersonOutlineIcon />
      </Box>

      <Modal
        size={"md"}
        color={"rgba(255, 255, 255, 0.7);"}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <ModalOverlay />
        <ModalContent bg={"black"} color={"white"}>
          <ModalCloseButton />
          <Image h={60} m={"auto"} src={Logo} alt={"Care&Fit Logo"} />
          <ModalBody minH={"350px"}>
            {/* Login form here */}
            <LoginForm onClose={onClose} />
            {/* Registration modal here with google and email */}
            <RegisterComponent />
            <Text w={"80%"} m={"auto"} mt={8} fontSize={"13px"}>
              By Continuing you agree to the Terms of Services and Privacy
              policy.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
