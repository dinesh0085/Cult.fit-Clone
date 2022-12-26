import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import styles from "./profile.module.css";
import { FiSettings } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";
import { TfiHeartBroken } from "react-icons/tfi";
import { Navigate, NavLink } from "react-router-dom";
import MobileNav from "./MobileNavProfile";
import { AiOutlinePoweroff } from "react-icons/ai";
import { getUser, logout } from "../../../redux/User/Login/login.action";
import { useDispatch, useSelector } from "react-redux";

const LinkItems = [
  { name: "Account", icon: FiSettings, href: "/profile/account" },
  { name: "Orders", icon: BsCart3, href: "/profile/orders" },
  { name: "Address", icon: FaUserEdit, href: "/profile/address" },
  {
    name: "Medical Records",
    icon: TfiHeartBroken,
    href: "/profile/medical_records",
  },
  { name: "Support", icon: BiSupport, href: "/profile/support" },
];

export default function SimpleSidebar({ children }) {
  const { isAuth } = useSelector((store) => store.login);
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (isAuth) {
      dispatch(getUser(token));
    }
  }, []);
  return (
    <Box minH="100vh">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        border={"1px"}
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box mt={20} ml={{ base: 0, md: "28%" }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, children, ...rest }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((store) => store.login);

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: "28%" }}
      pos="absolute"
      {...rest}
    >
      {/* <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        {/* <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} /> */}
      <Box
        h="20"
        alignItems="center"
        mx="8"
        mt={20}
        justifyContent="space-between"
      >
        <Text
          color={"black"}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          {userInfo?.User?.name}
        </Text>
        {userInfo?.User?.email}
      </Box>
      {LinkItems.map((link) => (
        // <NavItem
        //   key={link.name}
        //   name={link.name}
        //   href={link.href}
        //   icon={link.icon}
        // >
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.default
          }
          to={link.href}
        >
          <Flex justifyContent={"space-between"} px={6} py={6}>
            <Text color={"black"}>{link.name}</Text>
            {/* {children} */}
            <Icon as={link.icon} />
          </Flex>
        </NavLink>
      ))}
      {/* // Log Out Button */}
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? styles.active : styles.default
        }
      >
        <Flex
          onClick={() => dispatch(logout())}
          justifyContent={"space-between"}
          px={6}
          py={6}
        >
          <Text color={"black"}>Log Out</Text>
          {/* {children} */}
          <Icon as={AiOutlinePoweroff} />
        </Flex>
      </NavLink>
    </Box>
  );
};
