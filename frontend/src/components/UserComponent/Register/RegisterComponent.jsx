import {
  Box,
  Button,
  Image,
  Link,
  LinkBox,
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
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Logo from "../CareFit.jpg";
import React from "react";
import LoginForm from "../Login/LoginForm";
import { AiOutlineGoogle, AiFillFacebook, AiOutlineMail } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import RegisterModal from "./RegisterModal";
const RegisterComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        display={"flex"}
        mt={10}
        bg={"rgba(255, 255, 255, 0.7)"}
        color={"black"}
        justifyContent={"space-evenly"}
        w={"100%"}
        transition={"0.5s"}
        onClick={onOpen}
      >
        Or connect with
        <Box display={"flex"} gap={2}>
          <AiOutlineGoogle />
          <AiFillFacebook />
          <AiOutlineMail />
        </Box>
      </Button>
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
            {/* Google SignIn Here */}
            <Link
              href={
                "https://sore-erin-sockeye-tam.cyclic.app/api/user/google/callback"
              }
              target={"blank"}
            >
              <Button
                display={"flex"}
                w={"100%"}
                bg={"rgba(255, 255, 255, 0.7)"}
                mt={4}
                color={"black"}
                justifyContent={"space-between"}
                type="submit"
              >
                <Text>Sign in with Google</Text>
                <AiOutlineGoogle />
              </Button>
            </Link>
            {/* Facebook Login Here */}
            <Button
              display={"flex"}
              w={"100%"}
              bg={"rgba(255, 255, 255, 0.7)"}
              mt={4}
              color={"black"}
              justifyContent={"space-between"}
              type="submit"
            >
              <Text>Sign in with Facebook</Text>
              <AiFillFacebook />
            </Button>
            {/* Email Registration Here */}
            <RegisterModal />

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

export default RegisterComponent;
