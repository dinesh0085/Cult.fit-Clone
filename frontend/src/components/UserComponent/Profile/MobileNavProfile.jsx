import {
  Flex,
  IconButton,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import Logo from "../CareFit.jpg";
const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      mt={20}
      height="20"
      justifyContent={"flex-start"}
      alignItems="center"
      bg={useColorModeValue("black", "black")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      {...rest}
    >
      <IconButton
        color={"white"}
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text ml={28}>
        <Image h={100} w={100} src={Logo} />
      </Text>
    </Flex>
  );
};

export default MobileNav;
