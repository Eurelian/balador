import { List, ListItem, Link, Box, Flex, Center } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Divider } from "@chakra-ui/react";

import React from "react";
import { AnimatedBox } from "../lib/animated";
import Social from "./Social";
import { useMenu } from "../lib/context";
import { MenuItems } from "../lib/constants";
type Props = {};

const MenuList = (props: Props) => {
  const { setIsOpen } = useMenu();
  const router = useRouter();

  return (
    <AnimatedBox
      initial="hidden"
      animate="visible"
      width="100%"
      height="100%"
      variants={{
        visible: {
          opacity: 1,
        },
        hidden: {
          opacity: 0,
        },
      }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
    >
      <List color="white" fontSize="2xl" fontWeight="400" spacing={4}>
        {MenuItems.map((item) => (
          <ListItem
            key={item.title}
            justifyContent="center"
            w="100%"
            display="flex"
            fontWeight={router.pathname === item.link ? "bold" : "normal"}
            onClick={() => setIsOpen(false)}
          >
            <NextLink href={item.link} passHref>
              <Link>{item.title}</Link>
            </NextLink>
          </ListItem>
        ))}
      </List>
      <Center>
        <Divider w="80%" mt="25px" />
      </Center>
      <Center>
        <Social />
      </Center>
    </AnimatedBox>
  );
};
export default MenuList;
