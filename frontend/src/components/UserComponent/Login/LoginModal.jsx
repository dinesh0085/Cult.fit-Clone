import {
  Box,
  Button,
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
import React from "react";
import LoginForm from "./LoginForm";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
const LoginModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box transition={"0.5s"} onClick={onOpen}>
        <PersonOutlineIcon />
      </Box>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent bg={"black"} color={"white"}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <LoginForm />
          </ModalBody>
          <ModalFooter>
            <Button color={"black"} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
