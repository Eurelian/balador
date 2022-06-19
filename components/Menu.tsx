import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GiKnifeFork } from "react-icons/gi";
import { Box, Center, Divider, IconButton } from "@chakra-ui/react";
import { AnimatedBox } from "../lib/animated";
import MenuList from "./MenuList";

import Social from "./Social";
import { useMenu } from "../lib/context";

type Props = {};

const Menu = (props: Props) => {
  const { isOpen, setIsOpen } = useMenu();

  return (
    <>
      <IconButton
        aria-label="Menu"
        w="12"
        h="12"
        px="5px"
        py="5px"
        onClick={() => setIsOpen(!isOpen)}
        zIndex={5}
      >
        {isOpen ? <GiKnifeFork size="1.5rem" /> : <FiMenu size="1.5rem" />}
      </IconButton>
      {isOpen && (
        <AnimatedBox
          zIndex={4}
          exit="exit"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              opacity: 1,
              width: "100%",
              height: "90vh",
              top: 0,
              right: 0,
              borderRadius: "0px 0px 12px 12px",
            },
            hidden: {
              opacity: 0,
              width: 0,
              height: 0,
              top: 35,
              right: 15,
              borderRadius: "50%",
            },
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{ duration: 0.5, ease: "easeInOut" }}
          padding="0px"
          right="0"
          top="0"
          position="fixed"
          background="black"
        >
          <Center h="100%" mt="100px">
            <MenuList />
          </Center>
        </AnimatedBox>
      )}
    </>
  );
};
export default Menu;
