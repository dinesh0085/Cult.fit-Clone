import React from "react";
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
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNavProfile";

const LinkItems = [
  { name: "Orders", icon: BsCart3, href: "/profile/orders" },
  { name: "Account", icon: FiSettings, href: "/profile/account" },
  { name: "Address", icon: FaUserEdit, href: "/profile/address" },
  {
    name: "Medical Records",
    icon: TfiHeartBroken,
    href: "/profile/medical_records",
  },
  { name: "Support", icon: BiSupport, href: "/profile/support" },
];

export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
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

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: "28%" }}
      pos="fixed"
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
          Users Information Here
        </Text>
      </Box>

      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          name={link.name}
          href={link.href}
          icon={link.icon}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, href, name, children, ...rest }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) => (isActive ? styles.active : styles.default)}
    >
      {/* <Flex
        align="center"
        justifyContent={"space-between"}
        p="4"
        mx="4"
        cursor="pointer"
      >
        {children}
        {icon && <Icon mr="4" fontSize="16" as={icon} />}
      </Flex> */}
      <Flex justifyContent={"space-between"} px={6} py={6}>
        <Text color={"black"}>{name}</Text>

        <Icon as={icon} />
      </Flex>
    </NavLink>
  );
};
