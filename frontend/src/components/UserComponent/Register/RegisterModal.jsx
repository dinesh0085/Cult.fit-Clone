import {
  Button,
  Image,
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
import { AiOutlineMail } from "react-icons/ai";
import Logo from "../CareFit.jpg";
import React from "react";
// import RegisterComponent from "./RegisterComponent";
import SignupPage from "./SignupForm";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const RegisterModal = () => {
  const btnRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");

  return (
    <>
      <Button
        display={"flex"}
        w={"100%"}
        justifyContent={"space-between"}
        bg={"rgba(255, 255, 255, 0.7)"}
        mt={4}
        color={"black"}
        type="submit"
        onClick={onOpen}
      >
        <Text>Sign up with email</Text>
        <AiOutlineMail />
      </Button>
      <Modal
        size={"xl"}
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
        isCentered
      >
        <ModalOverlay />
        <ModalContent color={"rgba(255, 255, 255, 0.7)"} bg={"black"}>
          <ModalHeader>Sign up here</ModalHeader>
          <Image h={60} m={"auto"} src={Logo} alt={"Care&Fit Logo"} />
          <ModalCloseButton />
          <ModalBody minH={"350px"}>
            <SignupPage />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegisterModal;
